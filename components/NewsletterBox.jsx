import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className=' text-center'>
      <p className='text-2xl font-medium text-gray-800'>Suscríbete ahora y obtén un 5% de descuento</p>
      <p className='text-gray-400 mt-3'>
      Obten un pequeño descuento en tu primera compra al suscribirte a nuestro boletín
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Introduce tu correo electrónico' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUSCRIBIRSE</button>
      </form>
    </div>
  )
}

export default NewsletterBox