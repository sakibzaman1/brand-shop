import { useLoaderData } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Brand from "../../Components/Brands/Brand";
import Faq from "./Faq";
import Stats from "./Stats";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";



const Home = () => {

    const [theme, setTheme] = useState("light");
    const brands = useLoaderData();

    useEffect( ()=> {
        if( theme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    },[theme]);

    const handleThemeSwitch = () => {
        setTheme( theme === "dark" ? "light" : "dark")
    }

    return (
        <div  className="dark:bg-black">
            <div>
                <Header></Header>
            </div>
            <div className="flex justify-center gap-2 items-center py-10 ">
                <button className={`  ${theme === "dark" ? 'text-white bg-gradient-to-r from-stone-700 to-stone-950 p-2' : 'text-black bg-gradient-to-l from-base-100 to-base-300 p-2'}`} onClick={handleThemeSwitch}>Apply {theme === "dark" ? <span>Light</span> : <span>Dark</span>} Mode</button>
                <MdDarkMode size={20} className={theme === "dark" ? 'text-white' : 'text-black'}></MdDarkMode>
            </div>
            <div>
                <h1 className={`text-5xl font-semibold text-center mt-20 ${  theme === "dark" ? 'text-white' : 'text-black'}`}>Our Brands</h1>
                <div className="grid lg:grid-cols-3 gap-10 lg:gap-20 p-6 lg:p-20">
                    {
                        brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>
            </div>
            <div>
            <h1 className={`text-center text-4xl font-bold mt-16 ${  theme === "dark" ? 'text-white' : 'text-black'}`}>Some Common Questions</h1>
                <Faq></Faq>
            </div>
            <div className="pb-20">
                <h1 className={`text-5xl text-center mb-20 font-semibold mt-20 ${  theme === "dark" ? 'text-white' : 'text-black'}`}>Stats</h1>
                <Stats></Stats>
            </div>
        </div>
    );
};

export default Home;