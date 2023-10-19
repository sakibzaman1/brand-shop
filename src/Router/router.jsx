import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import './router.css'
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddProduct from "../Components/AddProduct/AddProduct";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import MyCart from "../Components/MyCart/MyCart";
import Profile from "../Components/Profile/Profile";
import UnderBrand from "../Components/UnderBrand/UnderBrand";
import ProductDetails from "../Components/UnderBrand/ProductDetails";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/brands.json')
            },
            {
                path: '/underBrand/:id',
                element: <PrivateRoute><UnderBrand></UnderBrand></PrivateRoute>,
                loader: ()=> fetch(`/brands.json`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/myProducts')
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])

export default router;