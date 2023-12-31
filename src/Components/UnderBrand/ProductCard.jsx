/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {

    const { _id, name, brand, photo, price, rating, category } = product;
    // console.log(_id)

    return (
        <div>
            <div className="card card-side h-80 shadow-xl border justify-between p-4 bg-opacity-10 bg-[#F5F4F1] rounded-none items-center">
                <figure className="w-1/2 h-60"><img className="w-full h-full" src={photo} alt="Movie" /></figure>
                <div className="w-1/2 flex justify-between items-center">
                    <div className="ml-6">
                        <h2 className="card-title text-2xl mb-2">Product : {name}</h2>
                        <p className="text-xl">Brand : {brand}</p>
                        <p>Category : {category}</p>
                        <p>Price : $ <span className="text-red-600">{price}</span></p>
                        <p>Rating : {rating}</p>
                        <div className="flex gap-6 mt-6">
                            <Link to={`/updateProduct/${_id}`}>
                                <button className="px-3 bg-gradient-to-l from-amber-600 to-amber-950 text-white rounded-sm">Update</button>
                            </Link>
                            <Link to={`/productDetails/${_id}`}>
                                <button className="px-3 bg-gradient-to-l from-amber-600 to-amber-950 text-white rounded-sm">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;