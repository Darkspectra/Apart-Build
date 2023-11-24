import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useMembers = () => {

    const axiosPublic = useAxios();
    
    const {data: users = [], isPending: loading, refetch} = useQuery({
        queryKey: ['users'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })

    return [users, loading, refetch];
};

export default useMembers;
