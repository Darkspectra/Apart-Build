import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAgreement from '../../../hooks/useAgreement';
import Swal from 'sweetalert2';



const MakePayment = () => {

    const { user } = useAuth();
    const { agree } = useAgreement()

    const currentMember = agree?.filter(person => person?.userEmail === user?.email && person?.status==="accepted");

    const navigate = useNavigate();

    const handleMakePayment = event => {
        event.preventDefault();
        const form = event.target;

        const date = form.date.value;

        const email = form.email.value;
        const rent = form.rent.value;
        const floor = form.floor.value;
        const block = form.block.value;
        const apart = form.apart.value;
        const transaction = ""

        const newMakePayment = { date, email, rent, floor, block, apart, transaction };
        console.log(newMakePayment);

        fetch("http://localhost:5000/makePayment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newMakePayment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'One Step Closer!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate("/dashboard/stripePage")
            })


    }




    return (
        <div>
            {
                currentMember.map(person => (

                    <div key={person._id} className="bg-[#F4F3F0] p-24">
                        <h2 className="text-3xl font-extrabold">Make Payment</h2>
                        <form onSubmit={handleMakePayment}>
                            <div className="">
                                <div className="md:w-full">
                                    <p className="text-2xl">Email</p>
                                    <input className="input input-bordered w-full text-2xl font-bold" disabled defaultValue={person.userEmail} name="email" />
                                </div>
                                <div className="md:w-full">
                                    <p className="text-2xl">Rent</p>
                                    <input className="input input-bordered w-full text-2xl font-bold" disabled defaultValue={person.rent} name="rent" />
                                </div>
                            </div>
                            <div className="md:flex mb-8">
                                <div className="md:w-1/2">
                                    <p className="text-2xl">Floor no</p>
                                    <input className="input input-bordered w-full text-2xl font-bold" disabled defaultValue={person.floorNo} name="floor" />
                                </div>
                                <div className="md:w-1/2 ml-4">
                                    <p className="text-2xl">Block Name</p>
                                    <input className="input input-bordered w-full text-2xl font-bold" disabled defaultValue={person.blockName} name="block" />
                                </div>
                            </div>
                            <div className="md:flex mb-8">
                                <div className="md:w-1/2">
                                    <p className="text-2xl">Apartment no</p>
                                    <input className="input input-bordered w-full text-2xl font-bold" disabled defaultValue={person.apartmentNo} name="apart"/>
                                </div>
                                <div className="md:w-1/2 ml-4">
                                    <p className="text-2xl">Date</p>
                                    <input type="date" name="date" className="input input-bordered text-center" />
                                </div>
                            </div>

                            <input type="submit" value="Pay" className="btn btn-block text-white bg-slate-500" />
                        </form>
                    </div>
                ))
            }
        </div>

    );
};

export default MakePayment;