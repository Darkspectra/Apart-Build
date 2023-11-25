import { FaExclamation } from "react-icons/fa";
import useMembers from "../../../hooks/useMembers";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAgreement from "../../../hooks/useAgreement";


const ManageMember = () => {
    const [users] = useMembers()
    const currentMembers = users?.filter(person => person?.role === "member");
    const {agree}=useAgreement()


    const navigate = useNavigate();
    const handleManage = event => {

        const changeStatus = agree?.find((person) => person?.userEmail === event?.email);

        const role = "user";
        const status = "rejected";

        const newMember = {role}
        const newStatus = {status}

        fetch(`http://localhost:5000/users/${event._id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newMember)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'User Removed!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        navigate(location?.state ? location.state : '/')
                    }
                })



        fetch(`http://localhost:5000/agreement/${changeStatus._id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newStatus)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        console.log("Also Status Updated")
                    }
                })
    }


    return (
        <div>
            <h2 className="text-2xl">Manage Member</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentMembers.map((mem, index) => <tr key={mem._id}>
                            <th>{index + 1}</th>
                            <td>{mem.name}</td>
                            <td>{mem.email}</td>
                            <td>
                                <button
                                    onClick={()=>handleManage(mem)}
                                    className="btn btn-ghost btn-lg">
                                    <FaExclamation className="text-red-600"></FaExclamation>
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMember;