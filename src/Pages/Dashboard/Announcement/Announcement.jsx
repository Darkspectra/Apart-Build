import Swal from 'sweetalert2'


const Announcement = () => {


    const handleAddAnnouncement = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const newAnnouncement = { title, description};
        console.log(newAnnouncement);

        fetch("http://localhost:5000/announcement", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newAnnouncement)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Announcement Posted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Create Announcement</h2>
            <form onSubmit={handleAddAnnouncement}>
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <p className="text-2xl">Title</p>
                        <input className="input input-bordered w-full" name="title" placeholder="Title" />
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <p className="text-2xl">Description</p>
                        <input className="input input-bordered w-full" name="description" placeholder="Description" />
                    </div>
                </div>

                <input type="submit" value="Create Announcement" className="btn btn-block text-white bg-slate-500" />
            </form>
        </div>
    );
};

export default Announcement;