import React from 'react'
import { AnimatePresence, motion } from 'motion/react'

export const ResponsiveMenu = ({isMenuOpen, NavbarLinks}) => {
    const animation ={
      initial: {opacity:0, y:-100},
      animate: {opacity:1, y:0},
      exit: {opacity:0, y:-100},
      transition: {duration:0.3}
    };
    return (
      <AnimatePresence mode='wait'>
        {
        isMenuOpen && (
          <motion.div {...animation} className='absolute top-20 left-0 w-full h-screen z-20'>
            <nav className="text-xl uppercase bg-pink-600 py-6 m-6 rounded-3xl text-amber-50">
                <ul className="flex flex-col justify-center items-center gap-10">
                    {NavbarLinks.map((link) => (
                        <li key={link.id} className="inline mr-6">
                            <a
                                href={link.href}
                                className="block py-1 px-3 hover:underline">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    );
        {/*<div> Enlaces de navegación móvil 
            </div>*/}
};
