import { CardElement,  useElements,  useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";


import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import usePaymentHistory from "../../hooks/usePaymentHistory";


const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    
    const axiosPublic = useAxios();
    const navigate = useNavigate();

    const {paymentHistory}=usePaymentHistory();


    const currentMember = paymentHistory?.find(person => person?.transaction === "");

    // const totalPrice = currentMember.reduce((total, item) => total + parseInt(item.rent), 0)

    const totalPrice = parseInt(currentMember?.rent);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosPublic.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosPublic, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                const payment = {transaction: paymentIntent.id};

                

                fetch(`http://localhost:5000/makePayment/${currentMember._id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(payment)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Payment Complete!',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                })
                                navigate("/dashboard/paymentHistory")
                            }
                        }
                    })

            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-500">Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;