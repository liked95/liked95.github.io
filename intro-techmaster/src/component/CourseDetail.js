import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import Context from './context'


function CourseDetail() {
    const { courseId } = useParams()
    let courses = useContext(Context)
    let course = courses.find(course => course.id == courseId)
    console.log(course)


    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.content}</p>
        </div>
    )
}

export default CourseDetail