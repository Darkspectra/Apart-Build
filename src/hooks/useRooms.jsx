import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";




const useRooms = () => {

    const axiosPublic = useAxios();
    
    const {data: rooms = [], isPending: loading, refetch} = useQuery({
        queryKey: ['rooms'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/rooms');
            return res.data;
        }
    })

    return [rooms, loading, refetch];
};

export default useRooms;