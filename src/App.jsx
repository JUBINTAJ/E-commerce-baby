import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Cart from './pages/Cart'
import Contact from './pages/contact'
import Navbar from './component/Navbar'
import Registration from './pages/Registration'
import { Footer } from './component/Footer'
import Login from './pages/Login'
import Searchbar from './component/Searchbar'
import Payment from './pages/payment'
import Product from './pages/Product'
import Adminhome from './admin/adminhome'
import Shop from './pages/Shop'
import Adminproduct from './admin/adminproduct'
import Adminuser from './admin/adminuser'
import Adminadd from './admin/Adminadd'
import Adminupdate from './admin/adminupdate'

function App() {
  return (
    <div className='px-4 sm:px-[1vw] md:px-[2vw] lg:px-[9w] w '>

{/* <div className='backgroundhome' > */}
   {/* <img src="https://www.babydeedee.com/cdn/shop/articles/lovely-newborn-asian-baby-sleeping-furry-cloth_1_1024x683.jpg?v=1685508446" alt="" /> */}
  
<Routes>

<Route  path='/' element ={<Home />} />
<Route  path='/About' element={<About />} />
<Route  path='/Cart' element={<Cart />} />
<Route  path='/Login' element={<Login />} />
<Route  path='/Contact' element ={<Contact />} />
<Route  path='/Shop'   element ={<Shop />} />
<Route  path='/Registration' element={<Registration />}/>
<Route  path='/payment'   element ={<Payment />} />
<Route  path='/Product/:Productid' element={<Product/>} />
<Route  path='/Adminhome' element={<Adminhome />} />
<Route  path='/Adminuser' element={<Adminuser />} />
<Route  path='/Adminproduct' element={<Adminproduct />} />
<Route  path='/Adminadd' element={<Adminadd />} />
<Route  path='/Adminupdate/:productid' element={< Adminupdate/>} />








</Routes>


{/* <Footer/> */}


    </div>
  )
}

export default App