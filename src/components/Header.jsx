import {Cake} 

export const Header = () => {
  return (
    <div className='flex items-center justify-between p-6'>
        <div className="flex items-center gap-2">
            <Cake className="w-8 h-8 text-pink-600" />
            Header
        </div>
        <nav className="hidden md:flex gap-4 text-pink-700 font-medium">
            Menu
        </nav>
    </div>
  )
}
