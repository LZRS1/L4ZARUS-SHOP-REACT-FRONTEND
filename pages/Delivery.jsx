import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Delivery = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'ENTREGA'} text2={'EXPRES'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.expres} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>COMO FUNCIONA LA ENTREGA</p>
          <p className=' text-gray-500'>Es necesario poner datos reales al momento del pago <br />ya que usaremos esos datos para contactarnos y entregar el producto.</p>
          <p className='font-semibold text-xl text-gray-600'>GARANTIAS</p>
          <p className=' text-gray-500'>LA DURACION DE LA GARANTIA VARIA SEGUN EL TIEMPO DE LA SUSCRIPCION <br /> Ejemplo: Si compras 1 mes de spotify premium, la garantia del producto sera de 1 mes, si compras 2 meses, la garantia sera de 2 meses, y asi sucesivamente</p>
          <button onClick={() => location.href='/collection'} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>COMPRAR AHORA</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Delivery
