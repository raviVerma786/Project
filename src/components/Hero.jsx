import React, { useContext, useEffect } from 'react'
import Bg from '../assets/main.jpg'
import Tools from './Tools';
import { UserContext } from '../Context/ContextApi';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Hero = () => {
  const store = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!store.signedIn){
      navigate("/login");
    }
  },[])

  return ( 
    <>
    <div className='max-w-[1640px] mx-auto'>
        <div className='max-h-[500px] relative'>
          {/* Your All-in-One Utility Companion */}
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Your <span className='text-orange-500'>All-in-One</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Utility</span> Companion</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={Bg} alt="/" />
        </div>
    </div>
     
     {/* Adding sections to the page */}
    <Tools/>
    <Footer/>
    </>
  )
}

export default Hero