import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";


const ViewAnnouncement = () => {

    const axiosPublic = useAxios();


    const { data: announcement = [] } = useQuery({
        queryKey: ['announcement'],
        queryFn: async () => {
            const res = await axiosPublic.get('/announcement');
            return res.data;
        }
    })

    return (
        <div>
            {
                announcement?.map((data, index) => (
                    <div className="chat chat-start" key={index}>
                        <div className="chat-bubble">
                            <span className="text-3xl font-bold text-red-400">{data?.title}</span> <br />
                            {data?.description}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ViewAnnouncement;