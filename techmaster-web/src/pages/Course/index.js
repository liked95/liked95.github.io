import React, { useContext, useEffect, useState } from "react";
import CourseTopic from "./components/CourseTopic";
import CourseSearch from "./components/CourseSearch";
import CourseList from "./components/CourseList";
import Context from "../../context/Context";
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import "./Course.css";

function Course() {
    const location = useLocation()
    const navigate = useNavigate()

    const { courses } = useContext(Context)

    const [filter, setFilter] = useState(() => {
        const params = queryString.parse(location.search);
        return {
            term: params.term || "",
            topic: params.topic || "",
        }
    })

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilter({
            term: params.term || "",
            topic: params.topic || "",
        })


    }, [location.search])

    const handleSearchTerm = (term) => {
        // setFilter({...filter, term})

        const queryParams = { ...filter, term }
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams)
        })


    }


    const handleChangeTopic = (topic) => {
        // setFilter({...filter, topic})

        const queryParams = { ...filter, topic }
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams)
        })
    }


    let filterCourses = () => {
        let newCourses = [...courses]
        if (filter.term) {
            newCourses = newCourses.filter(course => course.title.toLowerCase().includes(filter.term.toLowerCase()))
        }
        if (filter.topic) {
            newCourses = newCourses.filter(course => course.topics.includes(filter.topic))
        }

        return newCourses
    }

    let updatedCourses = filterCourses()


    return (
        <div className="course-container py-5">
            <div className="container">
                <div className="row">
                    <CourseTopic onChangeTopic={handleChangeTopic} />

                    <div className="col-md-9">
                        <CourseSearch onSearchTerm={handleSearchTerm} />

                        <CourseList updatedCourses={updatedCourses} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;