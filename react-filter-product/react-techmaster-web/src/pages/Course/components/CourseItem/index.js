import React from 'react'

function CourseItem(props) {
    return (
        <div className="col-md-4">
            <a href="./detail.html?id=1">
                <div className="course-item shadow-sm rounded mb-4">
                    <div className="course-item-image">
                        <img src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                            alt="khoa hoc" />
                    </div>
                    <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-4 text-dark">
                            Spring Boot - Web Back End
                        </h2>
                        <div
                            className="d-flex justify-content-between align-items-center fw-light text-black-50">
                            <p className="type">Trực tuyến</p>
                            <p className="rating">
                                5
                                <span className="text-warning"><i className="fa-solid fa-star"></i></span>
                            </p>
                        </div>
                        <p className="price text-danger fs-5">
                            1.000.000 VND
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CourseItem