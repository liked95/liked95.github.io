import React, { useState } from "react";
import { useLocation } from 'react-router-dom'
import queryString from "query-string";


function CourseSearch({ onChangeSearchTerm }) {
    const location = useLocation()
    const [input, setInput] = useState(() => {
        const paramsObj = queryString.parse(location.search)
        return paramsObj.term
    })

    const handleSearchClick = () => {
        onChangeSearchTerm(input)
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        placeholder="Tìm kiếm khóa học"
                        className="form-control border-0 seach-form-input" />
                    <span className="text-black-50 seach-form-button"
                        onClick={handleSearchClick}
                    ><i
                        className="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
        </div>
    );
}

export default CourseSearch;