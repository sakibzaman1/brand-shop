import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar";
import swal from "sweetalert";


const UpdateProduct = () => {

    const product = useLoaderData();

    const {_id, name, brand, photo, price, rating, category, description} = product;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedProduct = {name, brand, photo, price, rating, category, description};

        fetch(`http://localhost:5000/products/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount>0){
                swal("Updated!", "Your Product Has been updated", "success");
            }
        })
    }

    return (
        <div>
        <div className="bg-gradient-to-r from-amber-600 to-amber-950">
            <Navbar></Navbar>
        </div>
        <div className="bg-amber-100 p-20 w-full min-h-screen">
            <h1 className="text-center text-4xl mb-20">Update Your Product</h1>
            <form onSubmit={handleUpdateProduct} className="w-full lg:space-y-16">
                {/* form row 1*/}
                <div className="lg:flex justify-center gap-10 ">
                    <div className="form-control lg:w-1/2">

                        <label className="input-group">
                            <span className="bg-gradient-to-l from-amber-600 to-amber-950 text-white w-36">Name</span>
                            <input name="name" type="text" placeholder="product name" className="input input-bordered w-full" defaultValue={name}/>
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">

                        <label className="input-group">

                            <input name="brand" type="text" placeholder="nike / adidas / gucci / h&m / levis / zara" className="input input-bordered w-full" defaultValue={brand}/>
                            <span className="bg-gradient-to-r from-amber-600 to-amber-950 text-white w-36">Brand</span>
                        </label>
                    </div>
                </div>
                {/* form row 2*/}
                <div className="lg:flex justify-center gap-10 ">
                    <div className="form-control lg:w-1/2">

                        <label className="input-group">
                            <span className="bg-gradient-to-l from-amber-600 to-amber-950 text-white w-36">Photo URL</span>
                            <input name="photo" type="text" placeholder="photo url" className="input input-bordered w-full" defaultValue={photo}/>
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">

                        <label className="input-group">

                            <input name="price" type="text" placeholder="price" className="input input-bordered w-full" defaultValue={price}/>
                            <span className="bg-gradient-to-r from-amber-600 to-amber-950 text-white w-36">Price</span>
                        </label>
                    </div>
                </div>
                {/* form row 3*/}
                <div className="lg:flex justify-center gap-10 ">
                    <div className="form-control lg:w-1/2">

                        <label className="input-group">
                            <span className="bg-gradient-to-l from-amber-600 to-amber-950 text-white w-36">Category</span>
                            <input name="category" type="text" placeholder="clothing / footwear / accessories / beauty / sportswear/ outerwear" className="input input-bordered w-full" defaultValue={category}/>
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">

                        <label className="input-group">

                            <input name="rating" type="text" placeholder="rating" className="input input-bordered w-full" defaultValue={rating}/>
                            <span className="bg-gradient-to-r from-amber-600 to-amber-950 text-white w-36">Rating</span>
                        </label>
                    </div>
                </div>
                {/* form row 4*/}
                <div className="lg:flex justify-center gap-10 ">
                    <div className="form-control lg:w-1/2">

                        <label className="input-group">
                        <span className="bg-gradient-to-l from-amber-600 to-amber-950 text-white w-36">Description</span>
                        <input name="description" type="text" placeholder="short description" className="input input-bordered w-full" defaultValue={description}/>
                        </label>
                    </div>
                </div>
                {/* form row 5*/}
                <div className="lg:flex justify-center gap-10 ">
                    <div className="form-control lg:w-1/2">

                        <label className="">
                            <input type="submit" value="Update Product" className="btn btn-block bg-gradient-to-l from-amber-900 via-amber-500 to-amber-950 hover:scale-110 text-white" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdateProduct;