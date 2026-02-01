import './App.css'
import AboutUs from './components/AboutUs'
import { Contacto } from './components/Contacto'
import { Galeria } from './components/Galeria'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Productos } from './components/Productos'

function App() {
  return (
    <>
      <div className='min-h-dvh bg-gradient-to-br from-pink-100 to-pink-300 text-pink-900'>
        <Header />
        <Hero />
        <Productos /> 
        <Galeria />
        <AboutUs />
        <Contacto />
        <footer className='py-6 text-center bg-pink-700 text-white'>
          <p>&copy; 2024 Pasteleria Magica. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  )
}

export default App
