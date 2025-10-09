import React from 'react'

const productos = [
  {
    id: 1,
    nombre: "Pastel de Chocolate",
    descripcion: "Delicioso pastel de chocolate con cobertura de ganache.",
    precio: 20.00,
    image: "/src/assets/pie-2980431_640.jpg"
  },
  {
    id: 2,
    nombre: "Cupcakes de Vainilla",
    descripcion: "Suaves cupcakes de vainilla con glaseado de crema.",  
    precio: 15.00,
    image: "/src/assets/cerrar-un-delicioso-cupcake.jpg"
  },
  {
    id: 3,
    nombre: "Galletas Decoradas", 
    descripcion: "Galletas artesanales decoradas con glaseado de colores.",
    precio: 10.00,
    image: "/src/assets/galletas-decoradas.jpg"
  },
  {
    id: 4,
    nombre: "Tarta de Frutas", 
    descripcion: "Tarta fresca con una variedad de frutas de temporada.",
    precio: 25.00,
    image: "/src/assets/torta-de-frutas-refrescante.jpg"
  },
  {
    id: 5,
    nombre: "Macarons", 
    descripcion: "Delicados macarons franceses en varios sabores.",
    precio: 30.00,
    image: "/src/assets/macarons_640.jpg"
  }
];

export const Productos = () => {
  return (
    <section id='productos' className='py-16 px-6 bg-white text-center'>
      <h3 className='text-3xl font-bold text-pink-700 mb-8'>Nuestros productos</h3>
      <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {productos.map(producto => (
          <div key={producto.id} className='bg-pink-50 p-6 rounded-2x1 shadow-md hover:scale-105 transform transition duration-300'>
            <img src= {producto.image} alt={producto.nombre} />
            <h4 className='text-x1 font-bold mb-2'>{producto.nombre}</h4>
            <p className='text-sm text-gray-600 mb-2'>{producto.descripcion}</p>
            <p className='font-semibold text-pink-700'>€{producto.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
