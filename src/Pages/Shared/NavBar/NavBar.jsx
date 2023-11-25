
import { Link } from "react-router-dom";
import logo from "../../../assets/home/logo.jpg"

import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useMembers from "../../../hooks/useMembers";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [users] = useMembers();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const currentUser = users?.filter(person => person?.email === user?.email);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }



    const navOptions = <>
        <Link to="/"><img className="w-16 rounded-full mx-auto" src={logo} alt="" /></Link>
        <li><Link className="text-2xl btn mx-10" to="/">Home</Link></li>
        <li><Link className="text-2xl btn mr-10" to="/apartment">Apartment</Link></li>
        {/* <li><Link className="text-4xl" to="/signup">SignUp</Link></li> */}
        {
            // user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            // user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
        {
            user ? <>
                <li><Link className="text-2xl btn" to="/dashboard">Dashboard</Link></li>
                <div className="ml-14">
                    <img onClick={toggleMenu} className="w-16 rounded-full mx-auto" src={currentUser[0]?.photo} alt="" />
                    {
                        isMenuOpen && (
                            <div className=" mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {/* Dropdown menu items */}
                                    <li className="text-black text-xl">Name: {currentUser[0]?.name}</li>
                                    {/* <li className="text-blue-500 text-xl"><Link className="text-4xl btn" to="/dashboard">Dashboard</Link></li> */}
                                    

                                    {
                                        currentUser[0]?.role === "admin" ? <>
                                        <li className="text-blue-500 text-xl"><Link className="text-4xl btn" to="/dashboard/adminProfile">Profile</Link></li>
                                        </>  : <>
                                        {
                                            currentUser[0]?.role === "user" ? <>
                                            <li className="text-blue-500 text-xl"><Link className="text-4xl btn" to="/dashboard/userProfile">Profile</Link></li>
                                            </> : <li className="text-blue-500 text-xl"><Link className="text-4xl btn" to="/dashboard/memberProfile">Profile</Link></li>
                                        }
                                        </>
                                    }
                                    


                                    <button onClick={handleLogOut} className="text-2xl btn ml-16 text-red-400">LogOut</button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <button onClick={handleLogOut} className="text-2xl btn ml-16 text-red-400">LogOut</button>
            </> : <>
                <Link className="btn" to="/login">Login</Link>

            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <p className="text-6xl">Apart Bu<span className="text-blue-200 text-4xl font-bold">i</span>ld</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;