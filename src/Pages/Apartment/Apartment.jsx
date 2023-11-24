import useAuth from "../../hooks/useAuth";
import useRooms from "../../hooks/useRooms";


const Apartment = () => {

    const [rooms] = useRooms()
    const { user } = useAuth();

    const handleAddAgreement = room => {
        if (user && user.email) {
            const agreementItem = {
                userName: user.displayName,
                userEmail: user.email,
                floorNo: room.floor_no,
                blockName: room.block_name,
                apartmentNo: room.apartment_no,
                rent: room.rent,
                status: "prending"
            }
            console.log(agreementItem);
        }
    }

    return (
        <div className="py-32 ">
            <h2 className="text-2xl grid grid-cols-3 gap-10">{rooms.map(room =>
                <div key={room._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={room.image} alt="Shoes" /></figure>
                        <div className="card-body flex flex-col items-center">
                            <h2 className="card-title">--{room.block_name}--</h2>
                            <p>Apartment no: {room.apartment_no}</p>
                            <p>Floor no: {room.floor_no}</p>
                            <p><span className="font-bold">Rent: </span>{room.rent}</p>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={()=>handleAddAgreement(room)}
                                    className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                                >Agreement</button>
                            </div>
                        </div>
                    </div>
                </div>

            )}</h2>
        </div>
    );
};

export default Apartment;