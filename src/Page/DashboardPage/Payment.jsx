import { loadStripe } from "@stripe/stripe-js";
import SharedTitle from "../../Components/SharedTitle";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { useParams } from "react-router-dom";


const Payment = () => {
    const {id} = useParams()
    const stripePromise =loadStripe(import.meta.env.VITE_PAYMENT_KEY)
    return (
        <div>
            <SharedTitle title={'pay and make wealth'}></SharedTitle>

            <div>
              <Elements stripe={stripePromise}>
        <PaymentForm id={id}></PaymentForm>
              </Elements>
            </div>
        </div>
    );
};

export default Payment;