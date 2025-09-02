import React from 'react'

export const Header = () => {
  return (
    <div className='flex items-center justify-between p-6'>
        <div className="flex items-center gap-2">
            Header
        </div>
        <nav className="hidden md:flex gap-4 text-pink-700 font-medium">
            Menu
        </nav>
    </div>
  )
}
