import React from 'react'

export const Hero = () => {
  return (
    <section id='hero' className='text-center py-20 px-6'>
        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Bienvenidos a Pasteleria Magica</h2>
        <p className='text-lg md:text-xl mb-6'>Descubre nuestros deliciosos pasteles y postres hechos con amor y un toque de magia.</p>
        <a href="#productos" className='bg-pink-600 text-white text-lg px-6 py-3 rounded-full hover:bg-pink-700 transition'>Ver Productos</a>
    </section>
  )
}
