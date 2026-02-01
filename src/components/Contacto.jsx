import React from 'react'

export const Contacto = () => {
  return (
    <div className="py-16 px-6 bg-white text-center">
      <h3 className="text-3xl font-bold text-pink-700 mb-8">Contacto</h3>
      <p className="text-lg md:text-xl mb-6">Puedes contactarnos a través de los siguientes medios:</p>
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg">📧 correo@pasteleriamagica.com</p>
        <p className="text-lg">📞 +54 11 1234 5678</p>
        <p className="text-lg">📍 Av. Principal 123, Ciudad</p>
      </div>
    </div>
  )
}
