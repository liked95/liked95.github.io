import React, { useContext, useState } from "react";
import Context from "../../../../context/Context";
import {useLocation} from 'react-router-dom'
import queryString from "query-string";

function CourseTopic({ onChangeTopic }) {
    const { topics } = useContext(Context)
    const location = useLocation()

    const [checked, setChecked] = useState(() => {
        const paramsObj = queryString.parse(location.search)
        return paramsObj.topic
    })

    const handleChangeTopicButton = topic => {
        setChecked(topic)
        onChangeTopic(topic)
    }

    return (
        <div className="col-md-3">
            <h2 className="fs-5 mb-4">Chủ đề</h2>
            <div className="topic-container">
                {topics.map((topic, index) => (
                    <div className="topic-item input-group d-flex align-items-center mb-1" key={index}>
                        <input type="radio"
                            value={topic.value}
                            id={topic.value}
                            checked={checked == topic.value}
                            onChange={e => handleChangeTopicButton(e.target.value)} />
                        <label htmlFor={topic.value} className="ms-2 fs-5">{topic.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseTopic;