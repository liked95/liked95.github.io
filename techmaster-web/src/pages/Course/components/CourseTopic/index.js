import React, { useState, useContext } from "react";
import Context from "../../../../context/Context";
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'


function CourseTopic(props) {
    const location = useLocation()
    const [checked, setChecked] = useState(() => {
        const params = queryString.parse(location.search)
        return params.topic
    })
    const { topics } = useContext(Context);
    const {onChangeTopic} = props

    const handleChangeTopic = value => {
        setChecked(value)
        onChangeTopic(value)
    }




    return (
        <div className="col-md-3">
            <h2 className="fs-5 mb-4">Chủ đề</h2>
            <div className="topic-container">
                {topics.map((topic, index) => (
                    <div key={index} className="topic-item input-group d-flex align-items-center mb-1">
                        <input
                            type="radio"
                            value={topic.value}
                            id={topic.value}
                            onChange={e => handleChangeTopic(e.target.value)}
                            checked = {checked == topic.value}

                        />
                        <label htmlFor={topic.value} className="ms-2 fs-5">
                            {topic.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseTopic;