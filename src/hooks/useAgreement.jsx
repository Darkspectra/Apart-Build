import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useAgreement = () => {
    const axiosPublic = useAxios();

    const { data: agree = [] } = useQuery({
        queryKey: ['agree'],
        queryFn: async () => {
            const res = await axiosPublic.get('/agreement');
            return res.data;
        }
    })
    return {agree};
};

export default useAgreement;