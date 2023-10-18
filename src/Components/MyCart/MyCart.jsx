import Navbar from "../Header/Navbar";


const MyCart = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-950">
                <Navbar></Navbar>
            </div>
            <div>
                <h1 className="min-h-screen">My Cart Here</h1>
            </div>
        </div>
    );
};

export default MyCart;