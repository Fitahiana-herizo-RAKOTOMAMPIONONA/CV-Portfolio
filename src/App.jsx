import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/nav.bar';
import { About, Accueil, Contact, Work, Service, Credentials, WorkDetail } from './routes/export.route';
import './App.css';
import Footer from './components/footer/footer';
import PostWork from './admin/post.work';

function App() {
  return (
    <BrowserRouter>
      <div className='max-w-[1280px] pl-6 pr-6 m-auto relative'>
        <NavBar />
        <div className='mt-[80px] mb-10 min-h-[65vh]'>
          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/About' element={<About />} />
            <Route path='/credentials' element={<Credentials />} />
            <Route path='/work' element={<Work />} />
            <Route path='/work/:id_work' element={<WorkDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/admin/post/work' element={<PostWork />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
