import React, { useContext, useState, useEffect } from 'react';
import Context from './context';
import FilterByCourse from './Filter/FilterByCourse';
import Course from './Filter/Course/';

function TechCourse() {
  const [filter, setFilter] = useState({
    topic: "",
    term: "",
  })



  const initCourses = useContext(Context)
  console.log(initCourses)
  console.log(filter.term)

  const displayCourses = initCourses.filter(course => {
    if (!filter.topic && !filter.term) {
      return course;
    } else if (!filter.topic && filter.term) {
      return course.title.toLowerCase().includes(filter.term.toLowerCase())
    } else {
      return course.category == filter.topic && course.title.toLowerCase().includes(filter.term.toLowerCase())
    }

  })


  const handleRadioClick = id => {
    setFilter({
      topic: id,
      term: ''
    })
  }


  const handleResetFilter = () => {
    setFilter({
      topic: "",
      term: ""
    })
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
                <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                  <input
                    value={filter.term}
                    onChange={e => setFilter({ ...filter, term: e.target.value })}
                    type="text"
                    placeholder="Tìm kiếm khóa học"
                    className="form-control border-0 seach-form-input"
                  />

                  <span className="text-black-50 seach-form-button"><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
              </div>
            </div>
            <div className="course-list row">
              {displayCourses.length > 0 && displayCourses.map((course, index) => <Course key={index} course={course} />)}
              {displayCourses.length == 0 && <p>Không có kết quả</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCourse;
