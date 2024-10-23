import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Productitem } from '../component/Productitem'
import { Shopcontext } from '../context/ShopContext'

function Adminproduct() {
  
   const nav=useNavigate()
  const {product,currency ,deleteproduct}=useContext(Shopcontext)

  const deletesub= (id)=>{
    deleteproduct(id)
    nav("/Adminproduct")
    

  }

  return (
    <div>
            <div className="flex h-screen ">
      <aside className="w-64 bg-white shadow-md h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-6 py-2 hover:bg-gray-200">
             <Link to='/Adminhome'><p className="text-gray-700">Dashboard</p></Link> 
            </li>
            <li className="px-6 py-2 hover:bg-gray-200">
             <Link to='/Adminuser' > <p  className="text-gray-700">Users</p> </Link>
             
            </li>
            <li className="px-6 py-2 hover:bg-gray-200">
              <Link to='/Adminproduct' > <p className="text-gray-700">Product</p>  </Link>
            </li>
         
          </ul>
        </nav>
      </aside>
      <div className='mt-10'>
        <div className='flex justify-center'>
          <Link to={'/Adminadd'}>
          <button className='bg-lime-600 py-3 px-12 rounded-xl ' 
             >
              
              Add product
              
              </button>
          </Link>
         
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      
  {product.product.map((item, index) => (
    <div key={index} className='overflow-hidden'>
      <img className='hover:scale-110 transition ease-in-out' src={item.img} alt={item.title} />
      <p className='pt-3 pb-1 text-sm'>{item.title}</p>
      <p className='text-sm font-medium'>{item.currency} {item.price}</p>
      <p className='text-sm font-medium'>{item.rating} &#9733;</p>
      <p className='text-sm font-medium'>{item.category} </p>
<Link to={`/Adminupdate/${item.id}`}> <button className='text-white border bg-black  px-4 py-2 rounded-lg '  >update</button></Link> 
      <button className='text-red-600 bg-black border  px-4 py-2 rounded-lg ' onClick={() => deletesub(item.id)}>delete</button>
    </div>
  ))}


  
    

        </div>




      </div>
      </div>
      
    </div>
  )
}

export default Adminproduct