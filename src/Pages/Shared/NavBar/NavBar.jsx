// import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/home/logo.jpg"
// import { AuthContext } from "../../../providers/AuthProvider";

// import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    // const { user, logOut } = useContext(AuthContext);
    // const [isAdmin] = useAdmin()

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.log(error));
    // }

    const navOptions = <>
        <Link to="/"><img className="w-16 rounded-full mx-auto" src={logo} alt="" /></Link>
        <li><Link className="text-4xl" to="/">Home</Link></li>
        <li><Link className="text-4xl" to="/apartment">Apartment</Link></li>
        <li><Link className="text-4xl" to="/dashboard">dashboard</Link></li>
        <li><Link className="text-4xl" to="/signup">SignUp</Link></li>
        {
            // user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            // user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
        {
            // user ? <>
            //     {/* <span>{user?.displayName}</span> */}
            //     <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            // </> : <>
            //     <li><Link to="/login">Login</Link></li>
            // </>
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
                    <p className="text-6xl">Apart Build</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                    {/* <select className="border-8" name="difficulty" id="">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                    </select> */}
                    <details className="dropdown">
                        <summary className="m-1 btn">open or close</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                </div>
            </div>
        </>
    );
};

export default NavBar;