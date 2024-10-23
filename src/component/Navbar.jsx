import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { Shopcontext } from '../context/ShopContext';

function Navbar() {

    const navigate=useNavigate()
    const [visible,setvisible]=useState(false)
    const{setShowsearch,cartItems}=useContext(Shopcontext)
    const user=localStorage.getItem("user")
    const jsonuser=JSON.parse(user)
    // console.log(jsonuser)
  return (
    <div className='flex item-center justify-between py-5 font-medium' >
        <h1 className='baby prata-regular  sm:text-3xl' >Sweet Pea Baby Shop      </h1>

        {/* <img src="https://image.freepik.com/vector-gratis/coleccion-logos-baby-shop_23-2148714814.jpg" alt=""  style={{width:120}} /> */}
        {/* <h1>baby product</h1> */}




<ul className='hidden sm:flex gap-5 text-sm text-blue-700  ' >

    <NavLink to='/'  className='flex flex-col item-center gap-1 prata-regular '  >
        <p className='hover:scale-110 transition ease-in-out'>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
    </NavLink>
    
    <NavLink to='/Shop'  className='flex flex-col item-center gap-1'  >
        <p className='hover:scale-110 transition ease-in-out' >SHOP</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
    </NavLink>
    
    <NavLink to='/About'  className='flex flex-col item-center gap-1'  >
        <p className='hover:scale-110 transition ease-in-out' >ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
    </NavLink>
    <NavLink to='/Contact'  className='flex flex-col item-center gap-1'  >
        <p className='hover:scale-110 transition ease-in-out' >CONTACT </p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
    </NavLink>



    
   </ul>

     <div className='flex item-center gap-6' >


        <div className='group relative' >
            <img src='https://img.lovepik.com/element/45001/3052.png_860.png' alt="" className='w-5 cursor-pointer h-5 ' />

            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4' >
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-blue-500 rounded' >
                {
                    jsonuser? (
                        <>
                        <p className='cursor-pointer hover:text-black prata-regular '>{jsonuser.name}</p>
                        <p   className='cursor-pointer hover:text-black prata-regular '
                            onClick={()=>{
                                localStorage.removeItem("user")
                                navigate("/Login")
                            }
                            }
                        >Logout</p>
                        </>
                    ):(
                        <Link to='/Login'><p className='cursor-pointer hover:text-black prata-regular' >Login</p></Link>  
                    )
                      }
                </div>

            </div>

         </div>

            <Link to='/Cart' className='relative'  >
            <FontAwesomeIcon icon={faCartShopping}  />
            <p className='absolute top-[-5px] right-[-5px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px] ' >{cartItems.length}</p>

            </Link>
               <img onClick={()=>setvisible(true)} src="https://tse3.mm.bing.net/th?id=OIP.svBJWBQ6AfxCvUmZgkOj5AHaHa&pid=Api&P=0&h=220" alt="" className='w-5 h-5 cursor-pointer sm:hidden ' />
               
            

     </div>

     {/* side bar menu */}
     <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`} >
        <div className='  flex flex-col text-blue-500'  >
            <div onClick={()=>setvisible(false)}  className='flex item-center gap-4 p-3 cursor pointer ' >
                  <img src="http://cdn.onlinewebfonts.com/svg/img_117641.png" alt="" className='h-4 rotate-180 relative top-[6px] right-[3px]  ' />
                  <p  className='relative right-[9px] prata-regular ' >Back</p>
            </div>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border prata-regular  '    to='/' >HOME</NavLink>
            <NavLink  onClick={()=>setvisible(false)} className='py-2 pl-6 border prata-regular' to='/Shop  ' >SHOP</NavLink>
            <NavLink  onClick={()=>setvisible(false)} className='py-2 pl-6 border prata-regular' to='/About ' >ABOUT</NavLink>
            <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border prata-regular' to='/Contact ' >CONTACT</NavLink>

        </div>

     </div>

</div>
  )
}

export default Navbar