import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'PONTE EN'} text2={'CONTACTO'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Nuestra tienda</p>
          <p className=' text-gray-500'><a href="https://l4zarus.store/">l4zarus.store</a></p>
          <p className=' text-gray-500'>Tel: (+52) 55-2069-2985<br /> Email: l4zarus@l4zarus.com</p>
          <p className='font-semibold text-xl text-gray-600'>Ofertas de trabajo.</p>
          <p className=' text-gray-500'>Obtenga más información sobre nuestros equipos y ofertas de trabajo.</p>
          <button onClick={() => window.open('https://l4zarus.space/','_blank')}  className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>VER OFERTAS</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
