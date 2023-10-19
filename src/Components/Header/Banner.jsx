import { Link } from 'react-router-dom';
import bannerVideo from '../../assets/bannerVideo.mp4'
import { IoArrowRedo } from "react-icons/io5";

const Banner = () => {
    return (
        <div className="hero min-h-screen lg:w-full relative overflow-hidden">
            <div className="hero-overlay bg-opacity-100"></div>
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover opacity-95 ">
                <source src={bannerVideo} type="video/mp4" />
            </video>
            <div className="text-start text-neutral-content absolute left-6 lg:bottom-28 lg:left-10 z-10 ">
                <div className="flex flex-col items-start lg:space-y-20">
                    <h1 className="mb-10 text-5xl lg:text-7xl font-bold mt-20 bg-gradient-to-r from-amber-400 via-amber-700 inline-block text-transparent bg-clip-text ">Elevate <br />Your Style <br /> Define <br /> Your Identity</h1>
                    
                    <div className="flex justify-center gap-4 items-center">
                    <IoArrowRedo size={40} color="white"></IoArrowRedo>
                    <Link to="/signup"><button className="rounded-sm w-28 h-full hover:scale-110  bg-gradient-to-r from-amber-600 to-amber-950 hover:bg-[#403F3F] text-white font-semibold hover:text-white py-2  border-2 border-none hover:border-transparent  transition duration-300 ease-in-out">Sign Up</button></Link> 

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;