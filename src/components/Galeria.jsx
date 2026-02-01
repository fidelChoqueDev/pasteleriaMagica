import React from 'react'

export const Galeria = () => {
  return (
    <div className="py-16 px-6 bg-white text-center">
      <h3 className="text-3xl font-bold text-pink-700 mb-8">Galería de Imágenes</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-200 h-48 rounded-lg"></div>
        <div className="bg-gray-200 h-48 rounded-lg"></div>
        <div className="bg-gray-200 h-48 rounded-lg"></div>
      </div>
    </div>
  )
}
