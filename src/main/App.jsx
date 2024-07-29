import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../shared/components/navbar/nav.bar";
import {
  About,
  Accueil,
  Contact,
  Work,
  Service,
  Credentials,
  WorkDetail,
  Blog,
  BlogDetail,
} from "../ui/page/export.route";
import "./App.css";
import Footer from "../shared/components/footer/footer";
import PostWork from "../ui/admin/post.work";
import WorkAdmin from "../ui/admin/work.admin";
import EditWork from "../ui/admin/edit.work";
import AdminPage from "../ui/admin/admin.page";
import { NotFound } from "../core/error/not-found";

function App() {
  return (
    <BrowserRouter>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      <main className="max-w-7xl m-auto relative">
        <NavBar />
        <div className=" mb-10 min-h-[65vh] p-4">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/About" element={<About />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id_work" element={<WorkDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id_blog" element={<BlogDetail />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/work" element={<WorkAdmin />} />
            <Route path="/admin/work/post" element={<PostWork />} />
            <Route path="/admin/work/edit/:id" element={<EditWork />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
