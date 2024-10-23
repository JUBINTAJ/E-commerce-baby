import React, { useContext, useState ,useEffect } from 'react'
import Latestshop from '../component/Latestshop'
import Title from '../component/title'
import { Productitem } from '../component/Productitem'
import { Footer } from '../component/Footer'
import Navbar from '../component/Navbar'
import Searchbar from '../component/Searchbar'
import { Shopcontext } from '../context/ShopContext'

function Shop() {

  const {product ,search,showSearch}=useContext(Shopcontext)
  const [showFilter,setshowFilter]=useState(true)
  const[latestproduct,setlatestproduct]=useState([])
  const[category,setCategory]=useState([]);


  const toggleCategory=(e)=>{

    if(category.includes(e.target.value))
      { setCategory(prev => prev.filter(item => item   !== e.target.value))

    }else{
      setCategory(prev=>[...prev,e.target.value])
    }

  }

  const applyfilter = ()=>{
    let ProuductCopy = product.product;
    
        if(showSearch && search ){
      ProuductCopy = ProuductCopy.filter(item => item.title  && item.title.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      ProuductCopy = ProuductCopy.filter(item => category.includes(item.category))
    }
    setlatestproduct(ProuductCopy)

  }

  useEffect(()=>{
    applyfilter()
  },[category,search,showSearch])

  useEffect(()=>{
  setlatestproduct(product.product)
  },[])



  return (
    <div>
      <Navbar/>
      <Searchbar/>


   
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t' >

      {/*filter*/}

      <div className='min-w-60' >
        <p className='my-2 text-xl flex item-center cursor-pointer gap-2' >FILTERS</p>
     {/* category filter*/}

     <div className={`border border-grey-300  pl-5 py-3 mt-6 ${showFilter ? '' :'hidden' } sm:block `}  >
<p className='mb-3 text-sm font-medium' >CATEGORIES</p>
<div className='flex flex-col gap-2  text-sm font-light text-grey-700 ' >
  <p className='flex gap-2' >

    <input className='w-3' type="checkbox" value={'dress'} onChange={toggleCategory} /> Dress

  </p>
  <p className='flex gap-2' >

<input className='w-3' type="checkbox" value={'toys'} onChange={toggleCategory} /> Toys

</p>
<p className='flex gap-2' >

<input className='w-3' type="checkbox" value={'food'} onChange={toggleCategory} /> Food

</p>

</div>

     </div>

      </div>
           {/* right side*/}
           <div className='flex-1' >

            <div className=' flex justify-center text-base sm:text-2xl mb-4' >
              <Title text1={'All'} text2={'COLLECTION'} />
                        


            </div>
           {/* Prouduct filter*/}
           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6' >
        {
      
      latestproduct.map((item,index)=>(
        <Productitem key={index} id={item.id}  img={item.img} title={item.title} price={item.price} rating={item.rating} category={item.category} />
      ))
        } 

      </div>


           </div>



           
    </div>
    </div>
  
  )

}

export default Shop