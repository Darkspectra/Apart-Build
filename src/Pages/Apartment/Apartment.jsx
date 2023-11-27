import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
// import useRooms from "../../hooks/useRooms";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import './Pagination.css'
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Apartment = () => {

    // const [rooms] = useRooms()


    const { user } = useAuth();
    const navigate = useNavigate();


    const axiosPublic = useAxios();
    


    const [itemPerPage, setItemPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);

    const {data: rooms = []} = useQuery({
        queryKey: ['rooms'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/rooms?page=${currentPage}&size=${itemPerPage}`);
            return res.data;
        }
    })

    const totalItems = rooms.length;
    console.log(totalItems);
    const numberOfPages = Math.ceil(totalItems/itemPerPage);



    const pages = [...Array(numberOfPages).keys()]
    console.log(pages);



    

    const handleAddAgreement = room => {
        if (user && user.email) {
            const agreementItem = {
                userName: user.displayName,
                userEmail: user.email,
                floorNo: room.floor_no,
                blockName: room.block_name,
                apartmentNo: room.apartment_no,
                rent: room.rent,
                accept_date: new Date(),
                status: "pending"
            }
            console.log(agreementItem);
            axiosPublic.post('/agreement', agreementItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${user.displayName}'s Agreement added!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                })
                navigate("/");
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add Agreement",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }


    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemPerPage(val);
        setCurrentPage(0);
    }


    const handlePrevPage = () => {
        if (currentPage>0){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length -1){
            setCurrentPage(currentPage + 1);
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
                                    onClick={() => handleAddAgreement(room)}
                                    className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                                >Agreement</button>
                            </div>
                        </div>
                    </div>
                </div>

            )}</h2>

            <div className='pagination mt-16'>
                <button className="btn" onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page=> <button className={currentPage === page ? 'selected' : undefined} onClick={()=> setCurrentPage(page)} key={page}>{page}</button>)
                }
                <button className="btn" onClick={handleNextPage}>Next</button>
                <select value={itemPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                </select>
            </div>

        </div>
    );
};

export default Apartment;