import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <>
      <div className='min-h-dvh bg-gradient-to-br from-pink-100 to-pink-300 text-pink-900'>
        <Header />
        <Hero />
      </div>
    </>
  )
}

export default App
