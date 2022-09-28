import logo from './logo.svg';
import './App.css';
import React, { useContext, useState } from 'react';
import Context from './context';
import FilterByCourse from './components/FilterByCourse';
import Search from './components/Search';
import Course from './components/Course/';


function App() {
  const initCourses = useContext(Context).courses
  const searchInput = useContext(Context).searchInput
  console.log(searchInput)



  const [displayCourses, setDisplayCourses] = useState(initCourses)
  const [category, setCategory] = useState("")

  let filterCourses = initCourses

  const handleRadioClick = id => {
    setCategory(id)
  }
  

  const handleResetFilter = id => {
    setDisplayCourses(initCourses)
  }

  



  return (
    <div className="course-container mt-5 mb-5">
      <div className="container">
        <div className="row">
          <FilterByCourse handleRadioClick={handleRadioClick} />


          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <button onClick={handleResetFilter}>RESET FILTER</button>
                <Search />
              </div>
            </div>
            <div className="course-list row">
              {displayCourses.map((course, index) => <Course key={index} course={course} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
