import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useCurrenUser from "./useCurrenUser";


const useCurrentUserAgreement = () => {

    const[currentUser]=useCurrenUser()


    const axiosPublic = useAxios();
    
    const {data: agreement = []} = useQuery({
        queryKey: ['agreement'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/agreement');
            return res.data;
        }
    })
    
    const currentUserAgreement = agreement?.filter(person => person?.userEmail === currentUser?.email);

    return {currentUserAgreement};
};

export default useCurrentUserAgreement;