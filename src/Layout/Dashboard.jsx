import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCurrenUser from "../hooks/useCurrenUser";


const Dashboard = () => {

    const [currentUser] = useCurrenUser()



    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-200">
                <ul className="menu p-4">
                    {
                        currentUser?.role === "admin" ? <>
                            <li>
                                <NavLink to="/dashboard/adminProfile">
                                    <FaHome></FaHome>
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageMembers">
                                    <FaList></FaList>
                                    Manage Members</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/makeAnnouncement">
                                    <FaBook></FaBook>
                                    Make Announcement</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/agreementRequest">
                                    <FaUsers></FaUsers>
                                    Agreement Request</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageCoupons">
                                    <FaList></FaList>
                                    Manage Coupons</NavLink>
                            </li>
                        </>
                            :
                            currentUser?.role === "member" ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/memberProfile">
                                        <FaHome></FaHome>
                                        Member Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/Payment">
                                        <FaCalendar></FaCalendar>
                                        Make Payment</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaAd></FaAd>
                                        Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/announcement">
                                        <FaList></FaList>
                                        Announcement</NavLink>
                                </li>
                            </> : 
                            // User dashboard
                            <>
                            <li>
                                <NavLink to="/dashboard/userProfile">
                                    <FaHome></FaHome>
                                    User Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/announcement">
                                    <FaCalendar></FaCalendar>
                                    Announcement</NavLink>
                            </li>
                        </>
                    }

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/apartment">
                            <FaSearch></FaSearch>
                            Apartment</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;