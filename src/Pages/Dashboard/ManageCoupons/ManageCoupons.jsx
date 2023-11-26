import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaExclamation } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageCoupons = () => {

    const axiosPublic = useAxios();

    const navigate = useNavigate();

    const { data: coupons = [], isPending: loading, refetch } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const res = await axiosPublic.get('/createCoupon');
            return res.data;
        }
    })


    const handleDelete = event => {

        if (loading) {
            <span className="loading loading-spinner loading-lg"></span>
        }
        else {
            fetch(`http://localhost:5000/coupon/${event._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Coupon has been deleted.',
                            'success'
                        )
                        refetch();
                        navigate('/dashboard/manageCoupons')
                    }
                })
        }
    }


    return (
        <div>
            <Link className="text-2xl btn mx-10 mb-12 bg-blue-400 text-white" to="/dashboard/couponForm">Create Coupons</Link>
            <hr />
            <SectionTitle subHeading={"List of"} heading={"Coupons"}></SectionTitle>

            <div>
                <h2 className="text-2xl">Payment History</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Coupon Code</th>
                                <th>Discount Percentage</th>
                                <th>Coupon Description</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {coupons.map((mem, index) => <tr key={mem._id}>
                                <th>{index + 1}</th>
                                <td>{mem.code}</td>
                                <td>{mem.discount}</td>
                                <td>{mem.description}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(mem)}
                                        className="btn btn-ghost btn-lg">
                                        <FaExclamation className="text-red-600"></FaExclamation>
                                    </button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCoupons;