import React from 'react'
import { Link } from 'react-router-dom'

function Adminhome() {
  return (
    <div>
<div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-6 py-2 hover:bg-gray-200">
              <a  className="text-gray-700">Dashboard</a>
            </li>
            <li className="px-6 py-2 hover:bg-gray-200">
             <Link to='/Adminuser' > <p className="text-gray-700">Users</p> </Link>
            </li>
            <li className="px-6 py-2 hover:bg-gray-200">
            <Link to='/Adminproduct' > <p className="text-gray-700">Product</p>  </Link>
            </li>
         
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Welcome, Admin</h2>
           <Link to='/Login' > <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Logout</button> </Link> 
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>
            {/* Example Card */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols- lg:grid-cols-2 gap-6">
              <Link to='/Adminuser'>
              <div className="bg-cover bg-center rounded-lg p-4 h-40 flex items-center justify-center border border-grey-600">
                <h3 className="text-lg font-semibold text-gray-800 bg-white bg-opacity-70 p-2 rounded-lg">Users</h3>
                <img  className="w-16 h-16 mr-4 hover:scale-110 transition ease-in-out" src="https://atlas-content-cdn.pixelsquid.com/stock-images/computer-name-user-icon-gold-EKQq1ED-600.jpg" alt="" />

              </div>
              </Link>
             <Link to={'/Adminproduct'}>
             <div className="bg-cover bg-center rounded-lg p-4 h-40 flex items-center justify-center hover:scale-110 transition ease-in-out"
                    style={{ backgroundImage: 'url(https://www.bizadmark.com/wp-content/uploads/2020/07/Ecommerce1.jpg)' }} >
                    <h3 className="text-lg font-semibold text-gray-800 bg-white bg-opacity-70 p-2 rounded-lg">Product</h3>
            </div>
             </Link>
             
         
            </div>
          </div>
        </main>
      </div>
    </div>


    </div>
  )
}

export default Adminhome