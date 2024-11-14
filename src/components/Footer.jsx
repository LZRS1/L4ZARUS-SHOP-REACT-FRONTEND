import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            L4ZARUS CORP ES UNA TIENDA DEDICADA A VENDER PRODUCTOS DIGITALES COMO JUEGOS, SOFTWARE, APLICACIONES, LICENCIAS Y CODIGOS A UN PRECIO MAS BAJO QUE EL DE LAS EMPRESAS COMUNES, POR EJEMPLO, SPOTIFY A MITAD DE PRECIO Y MUCHO MAS.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPAÑÍA</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li> <a href="/">Inicios</a> </li>
                <li> <a href="/about">Sobre nosotros</a> </li>
                <li> <a href="/delivery">Entrega</a> </li>
                <li> <a href="/privacy">Politica de privacidad</a> </li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>PONTE EN CONTACTO</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+52 55-2069-2985</li>
                <li>l4zarus@l4zarus.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ l4zarus.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
