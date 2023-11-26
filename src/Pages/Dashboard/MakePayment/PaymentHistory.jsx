import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";



const PaymentHistory = () => {

    const { user } = useAuth()
    const axiosPublic = useAxios()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payments/${user?.email}`)
            return res.data;
        }
    })


    return (
        <div>

            <div>
                <h2 className="text-2xl">Payment History</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Floor no</th>
                                <th>Block Name</th>
                                <th>Room no</th>
                                <th>Transaction ID</th>

                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((mem, index) => <tr key={mem._id}>
                                <th>{index + 1}</th>
                                <td>{mem.email}</td>
                                <td>{mem.date}</td>
                                <td>{mem.floor}</td>
                                <td>{mem.block}</td>
                                <td>{mem.apart}</td>
                                <td>{mem.transaction}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;