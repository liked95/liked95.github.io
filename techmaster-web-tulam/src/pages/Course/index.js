import React, { useContext, useEffect, useState } from "react";
import CourseTopic from "./components/CourseTopic";
import CourseSearch from "./components/CourseSearch";
import CourseList from "./components/CourseList";
import Context from "../../context/Context";
import "./Course.css";
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

function Course() {
    let { courses } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location)


    const [filter, setFilter] = useState(() => {
        const { search } = location
        const query = queryString.parse(search)

        return {
            term: query.term || '',
            topic: query.topic || '',
        }
    })
    // `${location.pathname}?${queryURL}`
    useEffect(() => {
        let queryObject = queryString.parse(location.search)
        setFilter(queryObject)
    }, [location.search])


    const handleChangeTopic = (topic) => {
        const queryParams = { ...filter, topic }
        let queryURL = queryString.stringify(queryParams,
            { skipEmptyString: true })

        navigate({
            pathname: location.pathname,
            search: queryURL
        })
    }

    const handleChangeSearchTerm = (term) => {
        const queryParams = { ...filter, term }
        let queryURL = queryString.stringify(queryParams,
            { skipEmptyString: true })
            
        navigate({
            pathname: location.pathname,
            search: queryURL
        })
    }


    const filterCourse = () => {
        if (filter.topic) {
            courses = courses.filter(course => course.topics.includes(filter.topic))
        }

        if (filter.term) {
            courses = courses.filter(course => course.title.toLowerCase().includes(filter.term.toLowerCase()))
        }

        return courses
    }

    const renderedCourses = filterCourse()

    return (
        <div className="course-container py-5">
            <div className="container">
                <div className="row">
                    <CourseTopic onChangeTopic={handleChangeTopic} />

                    <div className="col-md-9">
                        <CourseSearch onChangeSearchTerm={handleChangeSearchTerm} />
                        <CourseList renderedCourses={renderedCourses} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;