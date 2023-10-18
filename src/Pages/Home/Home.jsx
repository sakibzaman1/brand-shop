import { useLoaderData } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Brand from "../../Components/Brands/Brand";


const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
            <h1 className="text-5xl font-semibold text-center mt-20">Our Brands</h1>
                <div className="grid lg:grid-cols-3 gap-20 p-20">
                    {
                        brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;