import { Route, Routes } from 'react-router-dom'

import './App.css';
import Header from './component/Header';
import HomePage from './component/HomePage';
import LearningPath from './component/LearningPath';
import ForBusiness from './component/ForBusiness';
import TechCourse from './component/TechCourse';
import StudentDemo from './component/StudentDemo';
import NotFound from './component/NotFound';
import CourseDetail from './component/CourseDetail';



function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <main className="col-md-10 p-5">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/learning-path' element={<LearningPath/>}/>
          <Route path='/business' element={<ForBusiness/>}/>

          <Route path='/course'>
            <Route index element={<TechCourse/>}/>
            <Route path=':courseId' element={<CourseDetail/>}/>
              
          </Route>
          
          
          <Route path='/student-demo' element={<StudentDemo/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
