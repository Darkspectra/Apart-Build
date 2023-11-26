import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAgreement from "../../../hooks/useAgreement";
import useCurrenUser from "../../../hooks/useCurrenUser";
import useMembers from "../../../hooks/useMembers";
import useRooms from "../../../hooks/useRooms";


const AdminProfile = () => {
    const [currentUser] = useCurrenUser()
    const [rooms] = useRooms();
    const [users] = useMembers();
    const {agree} = useAgreement();
    return (
        <div>
            <div className="avatar">
                <div className="w-80 rounded-full items-center ml-80">
                    <img src={currentUser?.photo} />
                </div>
            </div>
            <SectionTitle heading={currentUser?.name} subHeading={currentUser?.email}></SectionTitle>
            <div>
                <h2 className="text-3xl mb-10 font-bold">All Information</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Total Room No</th>
                                <th>Total Users</th>
                                <th>Total Members</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{rooms.length}</td>
                                <td>{users.length}</td>
                                <td>{agree.length}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;