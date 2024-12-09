import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t gradient-text'>
          <Title text1={'SOBRE'} text2={'NOSOTROS'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p >L4ZARUS CORP nació de la pasión por la innovación y el deseo de revolucionar la forma en que las personas compran plataformas y recursos para consumir su contenido. Nuestro viaje comenzó con una idea simple: proporcionar una plataforma donde los clientes puedan ahorrar dinero al obtener sus juegos, suscripciones y programas de manera segura y sin perder calidad.</p>
              <p>Desde nuestros inicios, hemos trabajado incansablemente para seleccionar una selección diversa de productos de alta calidad que satisfagan todos los gustos y preferencias. Desde plataformas de streaming y musica hasta licencias de software y videojuegos.</p>
              <b className="gradient-text">Nuestra Misión</b>
              <p className='text-gray-800'>Lograr que las personas disfruten de sus peliculas, series, musica, videojuegos y programas sin tener que pagar los tipicos precios altos del mercado comun y a la ves hacerles saber que su dinero esta seguro con nosotros y que recibiran lo prometido.</p>
          </div>
      </div>

      <div className=' text-xl py-4 gradient-text'>
          <Title text1={'PORQUE'} text2={'ELEGIRNOS'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 gradient-border'>
            <b className="gradient-text">Garantia de calidad:</b>
            <p className=' text-gray-600'>Seleccionamos y examinamos meticulosamente cada producto para garantizar que cumpla con nuestros estrictos estándares de calidad.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 gradient-border'>
            <b className="gradient-text">Conveniencia:</b>
            <p className=' text-gray-600'>Con nuestra interfaz fácil de usar y nuestro proceso de pedido sin complicaciones, comprar nunca ha sido tan fácil.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 gradient-border'>
            <b className="gradient-text">Servicio al cliente excepcional:</b>
            <p className=' text-gray-600'>Nuestro equipo de profesionales dedicados está aquí para ayudarlo, asegurando que su satisfacción sea nuestra principal prioridad.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 gradient-border'>
            <b className="gradient-text">Los precios mas bajos del mercado:</b>
            <p className=' text-gray-600'>Garantizamos ofrecerle los servicios que necesita a un precio extremadamente accesible y barato.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
