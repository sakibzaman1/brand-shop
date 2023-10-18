/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Brand = ({ brand }) => {


    const { id, brandName, brandImage, adImages } = brand;

    return (
        <div>
            <Link>

                <div className="card bg-base-100 shadow-xl h-96">
                    <figure className="px-10 pt-10">
                        <img src={brandImage} alt="Shoes" className="rounded-xl h-72 w-80" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{brandName}</h2>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default Brand;


// Image Links
/*

https://i.ibb.co/YkpgMsH/adidas-Logo.jpg
https://i.ibb.co/tLWZFPY/gucci-Logo.jpg
https://i.ibb.co/Zgw397Z/h-mLogo.jpg
https://i.ibb.co/XWbSW67/levis-Logo.jpg
https://i.ibb.co/bXQksmt/nikeLogo.jpg
https://i.ibb.co/Qv2wLh3/zaraLogo.jpg

*/