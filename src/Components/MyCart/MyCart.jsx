import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar";
import MyProduct from "./MyProduct";
import { useState } from "react";


const MyCart = () => {

    
    const myProducts = useLoaderData();
    const [myCurrentProducts, setMyCurrentProducts] = useState(myProducts)

    return (
        <div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-950">
                <Navbar></Navbar>
            </div>
            <div>
                <h1 className="text-4xl font-bold mt-10 text-center">
                    Added Products
                </h1>
            </div>
            <div>
                {
                    myProducts.length>0?

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 p-20">
                        {
                            myCurrentProducts.map(myProduct=> <MyProduct key={myProduct._id} myProduct={myProduct} myCurrentProducts={myCurrentProducts} setMyCurrentProducts={setMyCurrentProducts} ></MyProduct>)
                        }
                    </div> :

                    <h1 className="text-center my-10 text-red-600">Nothing Added Yet</h1>

                }
            </div>
        </div>
    );
};

export default MyCart;