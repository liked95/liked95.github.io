import React, { useContext } from 'react'
import { useParams , Link } from 'react-router-dom'
import Context from '../../context/Context'
import { addProduct } from '../../store/actions'
import { formatMoney } from '../../utils/utils'



function CourseDetail() {
    const { courseId } = useParams()
    const { courses, cartItems, dispatch } = useContext(Context)
    

    // Course
    let course = courses.find(course => course.id === Number(courseId))
    const { id, title, description, type, image, price, supporterId } = course


    // Supporter
    const { supporters } = useContext(Context)
    const supporter = supporters.find(sup => sup.id == supporterId)
    
    const handleAddProduct = id => {
        let isExist = cartItems.find(item => item.id == id)
        if (isExist) {
            alert("Đã có trong cart")
            return;
        }

        let newCartItem = {
            id, 
            title,
            image,
            price, 
            count: 1
        }

        dispatch(addProduct(newCartItem))
        alert("Thêm vào giỏ hàng thành công!!!")
    }

    return (
        <div className="course-container my-5">
            <div className="container">
                <div className="mb-4">
                    <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to='/khoa-hoc'>Khóa học</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {title}
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="main p-4 shadow-sm">
                            <h2 className="course-title fs-5">
                                {title}
                            </h2>

                            <hr />

                            <div className="supporter d-flex align-items-center">
                                <div className="supporter-image">
                                    <img
                                        src={supporter.avatar}
                                        alt="tư vấn viên"
                                        className="rounded-circle" />
                                </div>
                                <div className="ms-4 supporter-info">
                                    <p>
                                        <b>Tư vấn viên :</b>
                                        {supporter.name}
                                    </p>
                                    <p>
                                        <b>Email :</b>
                                        {supporter.email}
                                    </p>
                                    <p className="mb-0">
                                        <b>Số điện thoại :</b>
                                        {supporter.phone}
                                    </p>
                                </div>
                            </div>

                            <hr />

                            <h2 className="course-title fs-5">
                                Thông tin khóa học
                            </h2>

                            <div className="course-description">
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4 shadow-sm">
                            <div className="course-image mb-4">
                                <img src={image} alt={title} />
                            </div>
                            <p>
                                Học phí :
                                <span className="fw-bold course-price">
                                    {formatMoney(price)}
                                </span>
                            </p>
                            <p>
                                Hình thức học :
                                <span className="fw-bold course-type">{type}</span>
                            </p>
                            <button className="btn btn-success" onClick={() => handleAddProduct(id)}>
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail