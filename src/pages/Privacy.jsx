import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Privacy = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'PROTECCION DE'} text2={'DATOS'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.privacy} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>100% PRIVADO Y SEGURO</p>
          <p className=' text-gray-500'>Nos aseguramos de que tus datos esten protegidos ✅ <br />Sabemos que al realizar una compra por internet las personas pueden desconfiar de algunas paginas, pero te aseguramos que tus datos estan protegidos. <br />No almacenamos la informacion de facturacion ni datos que no consientas, la unica informacion almacenada es la puesta en el apartado de compra y solamente se utiliza para entregar los productos</p>
          <button onClick={() => location.href='/collection'} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>COMPRAR AHORA</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Privacy
