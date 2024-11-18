import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Política de cambio fácil</p>
        <p className=' text-gray-400'>Ofrecemos una política de cambio sin complicaciones.</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>La mejor atención al cliente</p>
        <p className=' text-gray-400'>Brindamos atención al cliente 24 horas al día, 7 días a la semana.</p>
      </div>

    </div>
  )
}

export default OurPolicy
