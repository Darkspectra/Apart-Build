import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCurrenUser from "../../../hooks/useCurrenUser";


const AdminProfile = () => {
    const [currentUser]=useCurrenUser()
    return (
        <div>
            <div className="avatar">
                <div className="w-80 rounded-full items-center ml-80">
                    <img src={currentUser?.photo} />
                </div>
            </div>
            <SectionTitle heading={currentUser?.name} subHeading={currentUser?.email}></SectionTitle>
        </div>
    );
};

export default AdminProfile;