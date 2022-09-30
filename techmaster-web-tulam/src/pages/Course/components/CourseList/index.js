import React from 'react'
import CourseItem from '../CourseItem'

function CourseList({renderedCourses}) {
    return (
        <div className="course-list row">
            {renderedCourses.length > 0 && renderedCourses.map((course, index ) => <CourseItem key={index} course={course}/>)}
            {renderedCourses.length == 0 && <p>Không có kết quả tìm kiếm</p>}
        </div>
    )
}

export default CourseList