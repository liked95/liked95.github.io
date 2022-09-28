import React from 'react'
import {Link} from 'react-router-dom'

function Course({course}) {
  
  const {id, title, image, method} = course
  return (
    <div className="col-md-4">
      <Link to={`${id}`}>
        <div className="course-item shadow-sm rounded mb-4">
          <div className="course-item-image">
            <img src={image}
              alt={title} />
          </div>
          <div className="course-item-info p-3">
            <h2 className="fs-5 mb-3 text-dark">{title}</h2>
            <p className="type fw-light text-black-50">{method}</p>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default Course