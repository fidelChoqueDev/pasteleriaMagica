import './App.css'
import AboutUs from './components/AboutUs'
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
        <AboutUs />
      </div>
    </>
  )
}

export default App
