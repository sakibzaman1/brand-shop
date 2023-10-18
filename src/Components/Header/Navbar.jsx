import { Link, NavLink } from "react-router-dom";
import './navbar.css'


const Navbar = () => {
    return (
        <div className="pt-2 pb-2">
            <div className="navbar gap-80 text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="navLinks"><NavLink>Home</NavLink></li>
                            <li className="navLinks"><NavLink>Add Product</NavLink></li>
                            <li className="navLinks"><NavLink>My Cart</NavLink></li>
                            <li className="navLinks"><NavLink>About</NavLink></li>
                            <li className="navLinks"><NavLink>Profile</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Fashion Savvy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-16">
                        <li className="navLinks"><NavLink to="/">Home</NavLink></li>
                        <li className="navLinks"><NavLink to="others">Add Product</NavLink></li>
                        <li className="navLinks"><NavLink to="others">My Cart</NavLink></li>
                        <li className="navLinks"><NavLink to="others">About</NavLink></li>
                        <li className="navLinks"><NavLink to="others">Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/signin">
                        <button className=" rounded-sm w-20 hover:scale-110  bg-transparent  text-white font-semibold hover:text-white py-2  border-none border-[#403F3F] hover:border-transparent  transition duration-300 ease-in-out">Sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;