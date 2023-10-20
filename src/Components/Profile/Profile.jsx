import { useContext } from "react";
import Navbar from "../Header/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {


    const { user } = useContext(AuthContext);

    return (
        <div className="">
            <div className="bg-gradient-to-r from-amber-600 to-amber-950">
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen flex justify-center items-center bg-base-200">
                <div className="card w-96 bg-gradient-to-r from-amber-200 via-amber-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={user.photoURL} alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user.displayName}</h2>
                        <p>{user.email}</p>
                        
                    </div>
                    <div className="text-center mb-10">
                            <Link to='/mycart'>
                                <button className="h-8 hover:scale-110 transition-transform font-semibold w-1/2 bg-gradient-to-l from-amber-600 to-amber-950 text-white">My Cart</button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;