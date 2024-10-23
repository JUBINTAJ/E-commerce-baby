import React from 'react'
import Title from './title'
function Small() {
  
  return (
    <div  >

    
     
    <div className='text-center py-8 text-3xl' >
      <Title text1={'Products'} text2={'Shop Now'} />
   

      </div>
        <div className='flex flex-col sm:flex-row  pt-7 gap-10'>

    
                   <img className='w-full sm:w-1/2 rounded-xl hover:scale-110 transition ease-in-out' src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-11.jpg" alt="" />


                   <img className='w-full sm:w-1/2 rounded-xl hover:scale-110 transition ease-in-out' src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-4.jpg" alt="" />



              <img className='w-full sm:w-1/2 rounded-xl hover:scale-110 transition ease-in-out' src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-6.jpg" alt="" />
            

              </div>

             
        </div>
  )
}

export default Small