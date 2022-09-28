import React from 'react'

function FilterByCourse({handleRadioClick}) {
    return (
        <div className="col-md-3">
            <h2 className="fs-5 mb-4">Chủ đề</h2>
            <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Backend" id="backend" name="topic" onChange={e => handleRadioClick(e.target.id)}/>
                <label htmlFor="backend" className="ms-2 fs-5">Lập trình Backend</label>
            </div>
            <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Frontend" id="frontend" name="topic" onChange={e => handleRadioClick(e.target.id)}/>
                <label htmlFor="frontend" className="ms-2 fs-5">Lập trình Frontend</label>
            </div>
            <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Di động" id="mobile" name="topic" onChange={e => handleRadioClick(e.target.id)}/>
                <label htmlFor="mobile" className="ms-2 fs-5">Lập trình di động</label>
            </div>
            <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Database" id="database" name="topic" onChange={e => handleRadioClick(e.target.id)}/>
                <label htmlFor="database" className="ms-2 fs-5">Cơ sở dữ liệu</label>
            </div>
        </div>
    )
}

export default FilterByCourse