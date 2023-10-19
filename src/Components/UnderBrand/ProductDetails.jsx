import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar";
import swal from "sweetalert";


const ProductDetails = () => {

    const product = useLoaderData();
    const {  name, brand, photo, price, rating, category, description } = product;

    const handleAddToCart = () => {

        const myAddedProduct = {name: name, brand: brand, photo: photo, category: category, price: price, rating: rating};

        fetch('http://localhost:5000/myProducts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(myAddedProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            swal({
                position: 'top-center',
                icon: 'success',
                title: 'Product Added',
                showConfirmButton: false,
                showCancelButton: false,
                timer: 2000
            });
        })
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-950 mb-20">
                <Navbar></Navbar>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:p-20 mb-20 items-center">
                <figure className="h-96 w-full"><img className="h-full w-full" src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl mb-4">{name}</h2>
                    <p className="pb-4">{description}</p>
                    <p className="text-xl font-bold">Brand : {brand}</p>
                    <p>Category : {category}</p>
                    <p>Price : $ <span className="text-red-600">{price}</span></p>
                    <p>Rating : {rating}</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="h-14 hover:scale-110 transition-transform font-semibold w-1/3 bg-gradient-to-l from-amber-600 to-amber-950 text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;