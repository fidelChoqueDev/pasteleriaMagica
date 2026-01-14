import React from 'react'
import { GiCupcake } from 'react-icons/gi';
import { NavbarLinks } from '../utils/Ruetes';

export const Header = () => {
  return (
    <div className='flex items-center justify-between p-6'>
        <div className="flex items-center gap-2">
            < GiCupcake className='w-8 h-8 text-pink-600'/>
            <h1 className='text-2xl font-bold'>Pasteleria Magica</h1>
        </div>
        <nav className="bg-amber-200 hidden md:flex gap-4 text-pink-700 font-medium">
          <ul>
            {NavbarLinks.map((link) => (
              <li key={link.id} className="inline mr-6">
                <a href={link.href} className="hover:underline">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='nav_togle'>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  )
}
