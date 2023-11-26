import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CouponForm = () => {

    const navigate = useNavigate();

    const handleCreateCoupon = event => {
        event.preventDefault();
        const form = event.target;

        const code = form.code.value;
        const discount = form.discount.value;
        const description = form.description.value;

        const newCoupon = { code, discount, description };
        console.log(newCoupon);

        fetch("http://localhost:5000/createCoupon", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoupon)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Coupon Created!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate("/dashboard/manageCoupons")
            })
    }





    return (
        <div>

            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold">Create Coupon</h2>
                <form onSubmit={handleCreateCoupon}>
                    <div className="">
                        <div className="md:w-1/2">
                            <p className="text-2xl">Coupon Code</p>
                            <input className="input input-bordered w-full text-2xl font-bold" name="code" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-2xl">Discount Percentage</p>
                            <input className="input input-bordered w-full text-2xl font-bold" name="discount" />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="md:w-full">
                            <p className="text-2xl">Description</p>
                            <input className="input input-bordered w-full text-2xl font-bold" name="description" />
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-block text-white bg-slate-500" />
                </form>
            </div>
        </div>
    );
};

export default CouponForm;