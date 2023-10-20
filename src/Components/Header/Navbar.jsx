import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import defaultUserLogo from '../../assets/user.png';
import { BiUserCheck, BiLogOutCircle, BiLogInCircle } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    // Sign Out Button

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="pt-2 pb-2">
            <div className={`navbar gap-52 ${ user? 'lg:gap-56' : 'lg:gap-72'} text-white `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="navLinks text-amber-600"><NavLink to="/">Home</NavLink></li>
                            <li className="navLinks text-amber-600"><NavLink to="/addproduct">Add Product</NavLink></li>
                            <li className="navLinks text-amber-600"><NavLink to="/mycart">My Cart</NavLink></li>
                            <li className="navLinks text-amber-600"><NavLink to="/about">About</NavLink></li>
                            <li className="navLinks text-amber-600"><NavLink to="/profile">{
                                user ? <div className="text-amber-600">{user.displayName}</div> : "Profile"
                            }</NavLink></li>
                        </ul>
                    </div>
                    <div className=" lg:pl-8">
                    <Link><img className="lg:h-20" src="https://i.ibb.co/gzMVTXt/Fashion-savvy-logo-no-Bg-small.png" alt="" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-16">
                        <li className="navLinks"><NavLink to="/">Home</NavLink></li>
                        <li className="navLinks"><NavLink to="/addproduct">Add Product</NavLink></li>
                        <li className="navLinks"><NavLink to="/mycart">My Cart</NavLink></li>
                        <li className="navLinks"><NavLink to="/about">About</NavLink></li>
                        <li className="navLinks"><NavLink to="/profile">{
                            user ? <div className="flex items-center gap-2"><BiUserCheck size={20}></BiUserCheck>{user.displayName}</div> : <div className="flex items-center gap-2"><AiOutlineUserAdd></AiOutlineUserAdd><p>Profile</p></div>
                        }</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end w-2/6 items-center">
                <div className="flex  justify-between items-center">
                        <div className="avatar" >
                            <div className="w-8 rounded-full  ring ring-offset-green-100 ring-offset-0 ">
                                <img src={

                                    user ? user.photoURL :

                                        defaultUserLogo} />
                            </div>
                        </div>
                        <div className="ml-2">
                            {
                                user ?

                                    <div className="flex items-center">
                                        <Link><button onClick={handleSignOut} className=" rounded-sm w-20 hover:scale-110  bg-transparent  text-white font-semibold hover:text-white py-2  border-none border-[#403F3F] hover:border-transparent  transition duration-300 ease-in-out">Logout</button></Link>
                                        <div className="hidden lg:flex"><BiLogInCircle></BiLogInCircle></div>
                                    </div> :

                                    <div className="flex items-center">
                                        <Link to="/signin"><button className=" rounded-sm w-20 hover:scale-110  bg-transparent  text-white font-semibold hover:text-white py-2  border-none border-[#403F3F] hover:border-transparent  transition duration-300 ease-in-out">Sign in</button></Link>
                                        <div className="hidden lg:flex"><BiLogOutCircle></BiLogOutCircle></div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;