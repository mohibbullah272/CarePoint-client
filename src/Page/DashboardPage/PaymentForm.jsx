import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentForm = ({ id }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [camp, setCamp] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios(`https://medical-camp-server-theta.vercel.app/payment-camp/${id}`)
      .then((res) => setCamp(res.data));
  }, [id]);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("https://medical-camp-server-theta.vercel.app/create-payment-intent", {
        amount: camp.camp_fee * 100,
        id,
      });

      const clientSecret = data.clientSecret;

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name: camp.camp_name },
        },
      });

      if (error) {
        console.error("Payment error:", error.message);
        toast.error("Payment failed");
        return;
      }

      if (paymentIntent.status === "succeeded") {
        await axios.patch("https://medical-camp-server-theta.vercel.app/update-status", {
          id,
          payment_status: "paid",
        });

        await axios.post(`https://medical-camp-server-theta.vercel.app/add-payment-history`, {
          camp_name: camp?.camp_name,
          fee: camp?.camp_fee,
          payment_status: "paid",
          email: user?.email,
          confirmation_status: camp?.confirmation_status,
          transId: paymentIntent?.id,
        });

        toast.success(`Payment successful! Transaction ID: ${paymentIntent.id}`);
        navigate("/dashboard/payment-history");
      }
    } catch (err) {
      console.error("Error during payment process:", err);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg my-16"
    >
      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Payment for {camp?.camp_name}</h3>
      <p className="text-lg text-[#0d0e0e] mb-6">Total: {camp?.camp_fee} TK</p>
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#1a1a1a] mb-2" htmlFor="card-element">
          Card Details
        </label>
        <div className="p-4 bg-[#f7f7f7] rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-[#7e9695] transition-all duration-200">
          <CardElement
            id="card-element"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#0d0e0e",
                  "::placeholder": {
                    color: "#6b7280",
                  },
                },
                invalid: {
                  color: "#ef4444",
                },
              },
            }}
          />
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePayment}
        disabled={!stripe || !elements || isLoading}
        className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors duration-200 ${
          !stripe || !elements || isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#7e9695] hover:bg-[#6a827f]"
        }`}
        aria-label="Submit payment"
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </motion.button>
    </motion.div>
  );
};

export default PaymentForm;