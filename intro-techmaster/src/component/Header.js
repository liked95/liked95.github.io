import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <ul className='header'>
      <li className='nav-item'>
        <NavLink to="/" className='nav-link' end>Trang chủ</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to="/learning-path" className='nav-link'>Lộ trình</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to="/business" className='nav-link'>Doanh Nghiệp</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to="/course" className='nav-link'>Khóa học</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to="/student-demo" className='nav-link'>Sản phẩm học viên</NavLink>
      </li>
    </ul>
  )
}

export default Header