import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import Navbar from "../../Components/Header/Navbar";


const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [registerError, setRegisterError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState('');

    // set button disabled

    const handleButtonDisable = (e) => {
        const termsAccepted = e.target.checked;
        console.log(termsAccepted);
        // button disabled

        if (termsAccepted) {
            setIsDisabled(false)
        }
        else {
            setIsDisabled(true)
        }
    }


    // create user

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, photo, password)

        setRegisterError('')
        setRegistrationSuccess('')

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 character long")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Your Password should have at least one uppercase character")
            return;
        }
        else if (!/[^A-Za-z0-9]/.test(password)) {
            setRegisterError("Your Password must have one special character")
            return;
        }
    }

    return (
        <div className="">
            <div className="bg-gradient-to-r from-amber-600 to-amber-950">
                <Navbar></Navbar>
            </div>
            <div className="hero min-h-screen bg-base-200 pt-20 pb-40">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className="text-center lg:text-right">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">We are thrilled to have you join us. Sign up now and unlock a world of possibilities. Experience the best of what we have to offer and connect with like-minded individuals. Your journey begins here.

                            Let`s get started!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSignUp} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                            </div>

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
                            <div className="py-6">
                                <input onChange={handleButtonDisable} type="checkbox" name="terms" id="" required /> {isDisabled ? <span className="text-red-900 pl-3 font-semibold">Please Accept Our Terms & Conditions*</span> : <span className="text-green-900 pl-3 font-semibold">Terms & Conditions Accepted</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={isDisabled} className={`w-full  font-semibold text-white h-14  ${isDisabled ? "bg-gray-600" : " bg-gradient-to-l from-amber-600 to-amber-950 hover:scale-110 transition-transform"}`}>Submit</button>
                            </div>

                            <div className="mx-auto mt-10 w-full px-10 text-center">
                                {
                                    registerError && <p className="text-red-900 italic font-semibold">{registerError}</p>
                                }
                                {
                                    registrationSuccess && <p className="text-green-900">{registrationSuccess}</p>
                                }
                            </div>

                            <div className="text-center pt-10">
                                <small className="font-medium text-black">Already Have an Account?  Please<Link to="/signin" className="text-green-900 ml-2 font-bold"><button>Sign in</button></Link></small>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;