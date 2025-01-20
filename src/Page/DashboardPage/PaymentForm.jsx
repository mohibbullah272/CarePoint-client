import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const PaymentForm = ({id}) => {
    const {user}=useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()
    const [camp,setCamp]=useState(null)
    useEffect(()=>{
        axios(`http://localhost:8500/payment-camp/${id}`)
        .then(res=> setCamp(res.data))
    },[id])
    const handlePayment = async () => {
        try {
         
          const { data } = await axios.post("http://localhost:8500/create-payment-intent", {
            amount: camp.camp_fee * 100, 
            id
          });
    
          const clientSecret = data.clientSecret;
    
          const { error, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: elements.getElement(CardElement),
                billing_details: { name: camp.camp_name },
              },
            }
          );
    
          if (error) {
            console.error("Payment error:", error.message);
         toast.error('payment failed')
            return;
          }
    
          if (paymentIntent.status === "succeeded") {
          
          await axios.patch("http://localhost:8500/update-status", {
                id,
                    payment_status: "paid",
                  });
    
          await axios.post(`http://localhost:8500/add-payment-history`,{
                camp_name:camp?.camp_name,
                fee:camp?.camp_fee,
                payment_status:'paid',
                email:user?.email,
                confirmation_status:camp?.confirmation_status,
                transId:paymentIntent?.id
            })
       
           toast.success(`payment success your transition id ${paymentIntent.id}`)
            navigate('/dashboard/payment-history')
         
          }
        } catch (err) {
          console.error("Error during payment process:", err);
          toast.error("Something went wrong!");
        }
      };
    
    
    return (
        <div className="p-8">
            <h3 className="text-2xl font-bold ">Payment for {camp?.camp_name}</h3>
            <p className="text-lg">total cost {camp?.camp_fee} tk</p>
        <div className="mt-4">
            <CardElement></CardElement>
            <button    onClick={handlePayment}  disabled={!stripe || !elements} className="btn mt-10 primary">Pay</button>
        </div>
        </div>
    );
};

export default PaymentForm;