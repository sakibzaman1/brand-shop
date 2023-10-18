import Banner from "./Banner";
import Navbar from "./Navbar";


const Header = () => {
    return (
        <div className="relative">
            <div className=" absolute top-0 left-0 w-full flex items-center justify-center z-10">
                <Navbar></Navbar>
            </div>
            <div className="w-full">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;