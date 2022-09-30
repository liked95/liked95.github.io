import React, {useContext} from 'react'
import CourseItem from '../CourseItem'


function CourseList({updatedCourses}) {
    
    
    return (
        <div className="course-list row">
            {updatedCourses.length > 0 && updatedCourses.map((course, index) => <CourseItem props={course} key={index}/>)}

            {updatedCourses.length == 0 && <p>Không có kết quả tương ứng</p>}
        </div>
    )
}

export default CourseList