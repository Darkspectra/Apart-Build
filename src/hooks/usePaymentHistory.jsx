import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const usePaymentHistory = () => {
    const axiosPublic = useAxios();

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['makePayment'],
        queryFn: async () => {
            const res = await axiosPublic.get('/makePayment');
            return res.data;
        }
    })
    return {paymentHistory};
};

export default usePaymentHistory;