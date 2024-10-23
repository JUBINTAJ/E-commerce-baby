import React from 'react'

export const Footer = () => {
  return (
   <div style={{backgroundColor:'pink', width: '100%'}} className=' text- rounded-xl'>
   <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm w-full max-w-full px-4 '>
       <div>
           <p className='text-xl font-medium mb-5'>Sweet Pea Baby Shop</p>
           {/* <img className='mb-5 w-32' src="https://image.freepik.com/vector-gratis/coleccion-logos-baby-shop_23-2148714814.jpg" alt="" /> */}
           <p className='w-full md:w-2/3 text-grey-600 prata-regular'>
               Our premium baby products are designed with love and care. At <span className='font-bold'>Sweet Pea Baby Shop</span>, we understand that every parent wants the best for their little one,
               and we’re dedicated to providing just that. Our curated collection features a range of high-quality essentials, from cozy sleepwear and soft blankets to stylish and practical gear. Each product is selected with the utmost attention to detail, ensuring both comfort and safety for your baby. Our mission is to make your parenting journey a little easier and a lot more joyful. Whether you’re looking for the perfect gift or stocking up on everyday necessities,
               you’ll find everything you need to nurture and delight your precious bundle of joy. Explore our offerings and discover why <span className='font-bold'>Sweet Pea Baby Shop</span> is loved by parents everywhere.
           </p>
       </div>

       <div>
           <p className='text-xl font-medium mb-5'>COMPANY</p>
           <ul className='flex flex-col gap-1 text-grey-600 prata-regular'>
               <li>Home</li>
               <li>About us</li>
               <li>Delivery</li>
               <li>Privacy policy</li>
           </ul>
       </div>

       <div>
           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
           <ul className='flex flex-col gap-1 text-grey-600'>
               <li>+1-221-789-6542</li>
               <li>Babyshop@gmail.com</li>
           </ul>
       </div>
   </div>

   <div className='w-full px-4'>
       <hr />
       <p className='py-5 text-sm text-center'>Copyright 2024@ Baby.com</p>
   </div>
</div>

  )
}
