import React, { useState } from "react";

function CourseTopic(props) {
    return (
        <div className="col-md-3">
            <h2 className="fs-5 mb-4">Chủ đề</h2>
            <div className="topic-container">
                <div className="topic-item input-group d-flex align-items-center mb-1">
                    <input type="radio" value="Backend" id="backend" name="topic" />
                    <label htmlFor="backend" className="ms-2 fs-5">Lập trình Backend</label>
                </div>
                <div className="topic-item input-group d-flex align-items-center mb-1">
                    <input type="radio" value="Frontend" id="frontend" name="topic" />
                    <label htmlFor="frontend" className="ms-2 fs-5">Lập trình Frontend</label>
                </div>
                <div className="topic-item input-group d-flex align-items-center mb-1">
                    <input type="radio" value="Di động" id="mobile" name="topic" />
                    <label htmlFor="mobile" className="ms-2 fs-5">Lập trình di động</label>
                </div>
                <div className="topic-item input-group d-flex align-items-center mb-1">
                    <input type="radio" value="Database" id="database" name="topic" />
                    <label htmlFor="database" className="ms-2 fs-5">Cơ sở dữ liệu</label>
                </div>
            </div>
        </div>
    );
}

export default CourseTopic;