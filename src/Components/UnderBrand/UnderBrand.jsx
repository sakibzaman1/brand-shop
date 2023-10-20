import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Header/Navbar";
import BrandSlider from "./BrandSlider";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";



const UnderBrand = () => {

    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);

    const brands = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const thatBrand = brands.find(thatBrand => thatBrand.id === idInt);
    const { brandName, adImages } = thatBrand;

    const brandNameLowerCase = brandName.toLowerCase();

    useEffect(() => {
        fetch('https://fashion-savvy-server-3droogfc9-sakib-zamans-projects.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                const filteredProducts = data.filter(product => (product.brand).toLowerCase() === brandNameLowerCase);
                setProducts(filteredProducts);
                setLoading(false);
            })
    }, [brandNameLowerCase]);






    return (
        <div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-950">
                <Navbar></Navbar>
            </div>
            <div className="">
                <BrandSlider adImages={adImages}></BrandSlider>
            </div>
            <h1 className="text-center text-3xl mb-6 mt-8 font-bold">Products under {brandName}</h1>
            <div className="mb-10">
                {
                    loading? 

                    <span className="min-h-screen flex mx-auto my-10 loading loading-spinner loading-lg"></span> :

                    products.length > 0 ?

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 lg:p-20">
                            {

                                products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)


                            }
                        </div> : <h1 className="text-center text-2xl text-red-600">No Products Available</h1>

                }
            </div>
        </div>
    );
};

export default UnderBrand;