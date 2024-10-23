import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../context/ShopContext';

function Adminuser() {


  const { user,usercount ,Adminblock,Adminunblock }=useContext(Shopcontext)

  // const deletadmin(()=>{

  // })
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
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
      <div  className=' flex item-center min-h-screen ' >
      <div className="bg-white shadow-md rounded-lg p-6">
          <table className="w-full bg-white">
            <thead className="bg-gray-200 border-b">
              <tr>
              <th className="py-2 px-4 text-left">id</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">cart</th>
                <th className="py-2 px-4 text-left">Block</th>

              </tr>
            </thead>
            <tbody>
                {usercount && usercount.length > 0 ? (
                  usercount.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="py-2 px-4">{user.id}</td>
                      <td className="py-2 px-4">{user.name}</td>
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="py-2 px-4">{user.cart && user.cart.length}</td> 
                      {user.block ? <td className="py-2 px-4 text-green-500">Yes </td> :<td className="py-2 px-4 text-red-500">No</td>}
                      <td className="py-2 px-4 flex space-x-2">
                        {user.block?(
                         <button
                        className=" text-black border px-4 py-2 rounded-lg"
                          onClick={() => Adminunblock(user.id)} > 
                              unblock
                             </button>
                        ) :(
                          <button
                          className=" text-black border px-4 py-2 rounded-lg"
                          onClick={() => Adminblock(user.id)}
                        >
                          block
                        </button>
                        )}
                     
                      
                      </td>
                  
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-2 px-4 text-center">No users found</td>
                  </tr>
                )}
              </tbody>
          </table>
        </div>
      </div>
      </div>

  

          
    </div>
  )
}

export default Adminuser;