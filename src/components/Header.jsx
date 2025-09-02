import React from 'react'
import { GiCupcake } from 'react-icons/gi';

export const Header = () => {
  return (
    <div className='flex items-center justify-between p-6'>
        <div className="flex items-center gap-2">
            < GiCupcake className='w-8 h-8 text-pink-600'/>
            <h1 className='text-2xl font-bold'>Pasteleria Magica</h1>
        </div>
        <nav className="hidden md:flex gap-4 text-pink-700 font-medium">
            Menu
        </nav>
    </div>
  )
}
