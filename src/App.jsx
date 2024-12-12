import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/nav.bar';
import { About, Accueil, Contact, Work, Service, Credentials, WorkDetail, Blog, BlogDetail } from './routes/export.route';
import './App.css';
import Footer from './components/footer/footer';
import PostWork from './admin/post.work';
import { BoxSearch } from './components/components.export';

function App() {
  return (
    <BrowserRouter>
      <main className='maxContent pl-6 pr-6 m-auto relative'>
        <NavBar />
        <div className='mt-[80px] mb-10 min-h-[65vh]'>
          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/About' element={<About />} />
            <Route path='/credentials' element={<Credentials />}/>
            <Route path='/work' element={<Work />} />
            <Route path='/work/:id_work' element={<WorkDetail />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blog/:id_blog' element={<BlogDetail/>}/>
            <Route path='/admin/post/work' element={<PostWork />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
