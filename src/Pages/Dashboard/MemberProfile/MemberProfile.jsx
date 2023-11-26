import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCurrenUser from "../../../hooks/useCurrenUser";
import useCurrentUserAgreement from "../../../hooks/useCurrentUserAgreement";


const MemberProfile = () => {
    const [currentUser] = useCurrenUser();
    const { currentUserAgreement } = useCurrentUserAgreement();
    return (
        <div>
            <div className="avatar">
                <div className="w-80 rounded-full items-center ml-80">
                    <img src={currentUser?.photo} />
                </div>
            </div>
            <SectionTitle heading={currentUser?.name} subHeading={currentUser?.email}></SectionTitle>
            <div>
                <h2 className="text-3xl mb-10 font-bold">Agreement Content</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Floor</th>
                                <th>Block</th>
                                <th>Room no</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {
                            <tbody>
                                {
                                    currentUserAgreement.length > 0 ? <>
                                        {currentUserAgreement.map((agg, index) => <tr key={agg._id}>
                                            <th>{index + 1}</th>
                                            <td>{agg.accept_date.slice(0, 10)}</td>
                                            <td>{agg.floorNo}</td>
                                            <td>{agg.blockName}</td>
                                            <td>{agg.apartmentNo}</td>
                                            {agg.status === "pending" ? <><td className="text-orange-400">{agg.status}</td></> : 
                                            agg.status === "rejected" ? <><td className="text-red-400">{agg.status}</td></> :
                                            <td className="text-green-400">{agg.status}</td>
                                            }
                                        </tr>)}
                                    </> :
                                    <tr>
                                    <th>#</th>
                                    <td>None</td>
                                    <td>None</td>
                                    <td>None</td>
                                    <td>None</td>
                                    </tr>
                                }
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;