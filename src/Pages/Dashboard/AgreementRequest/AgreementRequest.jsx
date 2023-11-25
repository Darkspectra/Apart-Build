import { FaCheck, FaExclamation } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAgreement from "../../../hooks/useAgreement";
import useMembers from "../../../hooks/useMembers";
import Swal from "sweetalert2";


const AgreementRequest = () => {
    const [users] = useMembers()
    const { agree } = useAgreement()

    const pendingUser = agree?.filter((person) => person?.status === "pending")



    const navigate = useNavigate();

    const handleAccept = event => {

        const currentUser = users?.find((person) => person?.email === event?.userEmail);
        console.log(currentUser);

        const role = "member";
        const status = "accepted";

        const newMember = { role }
        const newStatus = { status }


        fetch(`http://localhost:5000/users/${currentUser._id}`, {
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
                    console.log("Also Status Updated")
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'User Added Successfully!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        navigate(location?.state ? location.state : '/')
                    }
                }
            })





        fetch(`http://localhost:5000/agreement/${event._id}`, {
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
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Status Accepted Successfully!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        navigate(location?.state ? location.state : '/')
                    }
                }
            })
    }











    const handleReject = event => {


        const status = "rejected";

        const newStatus = { status }


        fetch(`http://localhost:5000/agreement/${event._id}`, {
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
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Rejected Successfully!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        navigate(location?.state ? location.state : '/')
                    }
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
                            <th>Floor no</th>
                            <th>Block Name</th>
                            <th>Room no</th>
                            <th>rent</th>
                            <th>Request Date</th>
                            <th>Accept</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingUser.map((mem, index) => <tr key={mem._id}>
                            <th>{index + 1}</th>
                            <td>{mem.userName}</td>
                            <td>{mem.userEmail}</td>
                            <td>{mem.floorNo}</td>
                            <td>{mem.blockName}</td>
                            <td>{mem.apartmentNo}</td>
                            <td>{mem.rent}</td>
                            <td>{mem.accept_date.slice(0, 10)}</td>
                            <td>
                                <button
                                    onClick={()=>handleAccept(mem)}
                                    className="btn btn-ghost btn-lg">
                                    <FaCheck className="text-green-500"></FaCheck>
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleReject(mem)}
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

export default AgreementRequest;