
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Shopcontext } from '../context/ShopContext';

function Adminupdate() {
  const { update } = useContext(Shopcontext);
  const { productid } = useParams();
  console.log(productid)
  const [product, setProduct] = useState({
    img: "",
    title: "",
    price: "",
    rating: "",
    category: ""
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log(productid)
        const response = await fetch(`http://localhost:7000/product/${productid}`);
        const data = await response.json();
        setProduct(data);
      
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productid]);
  useEffect(()=>{
    if(product){
      setProduct({
        img:product.img|| "",
        title: product.title ||"",
        price:product.price || "",
        rating:product.rating || "",
        category:product.category || ""

      })
    }
  },[])
  // console.log(product)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await update(product, productid);
      alert("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-2 text-sm font-medium text-gray-700">Product Name</label>
            <input
              id="title"
              name="title"
              type="text"
              value={product.title}
              required
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
            />
          </div>

          {/* Product Image URL */}
          <div className="flex flex-col">
            <label htmlFor="img" className="mb-2 text-sm font-medium text-gray-700">Product Image URL</label>
            <input
              id="img"
              name="img"
              type="text"
              value={product.img}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product image URL"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="mb-2 text-sm font-medium text-gray-700">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              value={product.price}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product price"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-2 text-sm font-medium text-gray-700">Category</label>
            <input
              id="category"
              name="category"
              type="text"
              value={product.category}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product category"
            />
          </div>

          {/* Rating */}
          <div className="flex flex-col">
            <label htmlFor="rating" className="mb-2 text-sm font-medium text-gray-700">Rating</label>
            <input
              id="rating"
              name="rating"
              type="number"
              min="1"
              max="5"
              value={product.rating}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product rating"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Adminupdate;
