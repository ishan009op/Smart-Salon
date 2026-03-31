import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Review from './Components/Review'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Home/>
   <About/>
   <Services/>
   <Review/>
   <Contact/>
   <Footer/>
    
    </>
  )
}

export default App
