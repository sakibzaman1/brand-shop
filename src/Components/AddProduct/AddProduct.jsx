import swal from "sweetalert";
import Navbar from "../Header/Navbar";


const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = {name, brand, photo, price, rating, category, description}
        console.log(newProduct)

        // send data to the server

        fetch('https://fashion-savvy-server-3droogfc9-sakib-zamans-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                swal({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Product Added Successfully',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000
                });
            }
        })
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-950">
                <Navbar></Navbar>
            </div>
            <div className="bg-amber-100 p-20 w-full min-h-screen">
                <h1 className="text-center text-4xl mb-20">Add a Product</h1>
                <form onSubmit={handleAddProduct} className="w-full lg:space-y-16 space-y-10">
                    {/* form row 1*/}
                    <div className="lg:flex justify-center gap-10 ">
                        <div className="form-control lg:w-1/2">

                            <label className="input-group">
                                <span className="bg-gradient-to-l from-amber-600 to-amber-950 text-white w-36">Name</span>
                                <input name="name" type="text" placeholder="product name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/2">

                            <label className="input-group">

                                <input name="brand" type="text" placeholder="nike / adidas / gucci / h&m / levis / zara" className="input input-bordered w-full" />
                                <span className="bg-gradient-to-r from-amber-600 to-amber-950 text-white w-36">Brand</span>
                            </label>
                        </div>
                    </div>
                    {/* form row 2*/}
                    <div className="lg:flex justify-center gap-10 ">
                        <div className="form-control lg:w-1/2">

                            <label className="input-group">
                                <span className="bg-gradient-to-l from-amber-600 to-amber-950 text-white w-36">Photo URL</span>
                                <input name="photo" type="text" placeholder="photo url" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/2">

                            <label className="input-group">

                                <input name="price" type="text" placeholder="price" className="input input-bordered w-full" />
                                <span className="bg-gradient-to-r from-amber-600 to-amber-950 text-white w-36">Price</span>
                            </label>
                        </div>
                    </div>
                    {/* form row 3*/}
                    <div className="lg:flex justify-center gap-10 ">
                        <div className="form-control lg:w-1/2">

                            <label className="input-group">
                                <span className="bg-gradient-to-l from-amber-600 to-amber-950 text-white w-36">Category</span>
                                <input name="category" type="text" placeholder="clothing / footwear / accessories / beauty / sportswear/ outerwear" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control lg:w-1/2">

                            <label className="input-group">

                                <input name="rating" type="text" placeholder="rating" className="input input-bordered w-full" />
                                <span className="bg-gradient-to-r from-amber-600 to-amber-950 text-white w-36">Rating</span>
                            </label>
                        </div>
                    </div>
                    {/* form row 4*/}
                    <div className="lg:flex justify-center gap-10 ">
                        <div className="form-control lg:w-1/2">

                            <label className="input-group">
                            <span className="bg-gradient-to-l from-amber-600 to-amber-950 text-white w-36">Description</span>
                            <input name="description" type="text" placeholder="short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row 5*/}
                    <div className="lg:flex justify-center gap-10 ">
                        <div className="form-control lg:w-1/2">

                            <label className="">
                                <input type="submit" value="Add Product" className="btn btn-block bg-gradient-to-l from-amber-900 via-amber-500 to-amber-950 hover:scale-110 text-white" />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;