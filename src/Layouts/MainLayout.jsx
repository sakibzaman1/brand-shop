import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <section></section>
            <section className="max-w-screen-2xl mx-auto font-josefinSans">
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;