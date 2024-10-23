import React from 'react'
import Hero from '../component/Hero'
import Latestshop from '../component/Latestshop'
import Small from '../component/Small'
import { Footer } from '../component/Footer'
import Navbar from '../component/Navbar'

function Home() {
    
  return (
    <>
  
    <div className='backgroundhome' >

{/* <img src="https://www.babydeedee.com/cdn/shop/articles/lovely-newborn-asian-baby-sleeping-furry-cloth_1_1024x683.jpg?v=1685508446" alt="" /> */}
<Navbar/>
<Hero/>
<Small/>
<Footer/>


  </div>
  </>
 
  )
}

export default Home

  