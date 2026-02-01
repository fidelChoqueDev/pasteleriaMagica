import React from 'react'
import { GiCupcake } from 'react-icons/gi';
import { NavbarLinks } from '../utils/Ruetes';
import { ResponsiveMenu } from './ResponsiveMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <div className='flex items-center justify-between p-6'>
        <div className="flex items-center gap-2">
            < GiCupcake className='w-8 h-8 text-pink-600'/>
            <h1 className='text-2xl font-bold'>Pasteleria Magica</h1>
        </div>
        {/* Enlaces de navegación para pantallas medianas y grandes */}
        <nav className="bg-amber-200 hidden sm:block gap-4 text-pink-700 font-medium">
          <ul>
            {NavbarLinks.map((link) => (
              <li key={link.id} className="inline mr-6">
                <a 
                href={link.href} 
                className="inline-block py-1 px-3 hover:underline">
                {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Menú Hamburguesa */}
        <div 
          className={`flex flex-col gap-1.5 cursor-pointer sm:hidden`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span 
            className={`h-1 w-8 bg-purple-700 rounded transition-all duration-300 block`}
            style={{
              transformOrigin: '5px 0px',
              transform: isMenuOpen ? 'rotate(45deg)' : 'none'
            }}
          ></span>
          <span className={`h-1 w-8 bg-purple-700 rounded transition-all duration-300 ${isMenuOpen ? 'hidden' : 'block'}`}></span>
          <span 
            className={`h-1 w-8 bg-purple-700 rounded transition-all duration-300 block`}
            style={{
              transformOrigin: '5px 0px',
              transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 1px)' : 'none'
            }}
          ></span>
        </div>

        {/*mobile sidebar section*/}
        <ResponsiveMenu isMenuOpen={isMenuOpen} NavbarLinks={NavbarLinks}/>
    </div>
  )
}
