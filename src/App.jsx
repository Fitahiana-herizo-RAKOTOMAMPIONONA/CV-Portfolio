import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/nav.bar'
import { About, Accueil, Competence, Contact, Experience, Projet, Service } from './routes/export.route'
import './App.css'
import Footer from './components/footer/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1500px] pl-6 pr-6 m-auto relative'>
      <NavBar/>
      <div className='mt-[80px] mb-10 min-h-[65vh]'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Accueil/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/work' element={<Projet/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  )
}

export default App
