import React from 'react'

const productos = [
  {
    id: 1,
    nombre: "Pastel de Chocolate",
    descripcion: "Delicioso pastel de chocolate con cobertura de ganache.",
    precio: 20.00,
    imagen: "https://example.com/pastel-chocolate.jpg"
  },
  {
    id: 2,
    nombre: "Cupcakes de Vainilla",
    descripcion: "Suaves cupcakes de vainilla con glaseado de crema.",  
    precio: 15.00,
    imagen: "https://example.com/cupcakes-vainilla.jpg"
  },
  {
    id: 3,
    nombre: "Galletas Decoradas", 
    descripcion: "Galletas artesanales decoradas con glaseado de colores.",
    precio: 10.00,
    imagen: "https://example.com/galletas-decoradas.jpg"
  },
  {
    id: 4,
    nombre: "Tarta de Frutas", 
    descripcion: "Tarta fresca con una variedad de frutas de temporada.",
    precio: 25.00,
    imagen: "https://example.com/tarta-frutas.jpg"
  },
  {
    id: 5,
    nombre: "Macarons", 
    descripcion: "Delicados macarons franceses en varios sabores.",
    precio: 30.00,
    imagen: "https://example.com/macarons.jpg"
  }
];

export const Productos = () => {
  return (
    <section id='productos' className='py-16 px-6 bg-white text-center'>
      <h3 className='text-3xl font-bold text-pink-700 mb-8'>Nuestros productos</h3>
      <div>
        Aqui biene el mapeo de productos
        {productos.map(producto => (
          <div key={producto.id} className='border'>
            <img src= {producto.imagen} alt={producto.nombre} />
            <h4>{producto.nombre}</h4>
            <p>{producto.descripcion}</p>
            <p>€{producto.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
