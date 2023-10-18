import { useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {


    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password)
        
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-950">
                <Navbar></Navbar>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-right">
                        <h1 className="text-5xl font-bold">Sign in now!</h1>
                        <p className="py-6">Welcome back! 
                            We`re delighted to see you again. Sign in to your account and continue your journey with us. Your access to a world of opportunities and experiences awaits.

                            Let`s get started!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex items-center relative">
                                    <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />
                                    <div className="absolute right-4">
                                        {
                                            !showPassword ? <BiLowVision className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiLowVision> : <BiShowAlt className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiShowAlt>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="form-control mt-10">
                                <button className="h-14 hover:scale-110 transition-transform font-semibold w-full bg-gradient-to-l from-amber-600 to-amber-950 text-white">Sign in</button>
                            </div>

                            <div className="flex flex-col justify-between mt-10 mb-6 space-y-6 lg:space-y-0">
                                <button className="text-black btn btn-outline rounded-none bg-transparent hover:rounded-none capitalize">
                                    <FcGoogle></FcGoogle>
                                    Sign in with Google
                                </button>
                            </div>

                            <div className="text-center pt-6">
                                <small className="font-medium text-black">New to this Website? Please<Link to="/signup" className="text-red-700 ml-1"><button>Sign Up</button></Link></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;