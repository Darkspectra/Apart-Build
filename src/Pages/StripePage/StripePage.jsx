import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const StripePage = () => {
    return (
        <div>
            <SectionTitle subHeading={"On Process"} heading={"Stripe Payment"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default StripePage;