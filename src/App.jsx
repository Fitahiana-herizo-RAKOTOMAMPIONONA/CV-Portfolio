import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/nav.bar'
import { About, Accueil, Competence, Contact, Experience, Projet, Service } from './routes/export.route'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[90%] m-auto'>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/Competence' element={<Competence/>}></Route>
          <Route path='/Experience' element={<Experience/>}></Route>
          <Route path='/projet' element={<Projet/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
