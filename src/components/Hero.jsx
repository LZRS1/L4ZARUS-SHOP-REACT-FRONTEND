import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row  border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 gradient-border'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] animated-gradients'></p>
                    <p className=' font-medium text-sm md:text-base gradient-text3'>L4ZARUS CORP</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed gradient-text'>La mejor tienda de servicios digitales</h1>
                <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm md:text-base gradient-text3'>
    <Link to="/collection">COMPRA AHORA</Link>
</p>
                    <p className='w-8 md:w-11 h-[2px] animated-gradients'></p>
                </div>
            </div>
      </div>
      {/* Hero Right Side */}
      <img width="100" height="100" className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
