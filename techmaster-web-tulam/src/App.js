import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Course from "./pages/Course";
import Layout from "./components/Layout";
import Track from "./pages/Track";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ShoppingCart from "./pages/ShoppingCart";
import NotFound from "./pages/NotFound";
import CourseDetail from './pages/Course/CourseDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='lo-trinh' element={<Track />} />

          <Route path='khoa-hoc'>
            <Route index element={<Course />} />
            <Route path=":courseId" element={<CourseDetail/>}/>
          </Route>


          <Route path='san-pham-hoc-vien' element={<Project />} />
          <Route path='blog' element={<Blog />} />
          <Route path='about' element={<About />} />
          <Route path='gio-hang' element={<ShoppingCart />} />
          <Route path='*' element={<NotFound />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;
