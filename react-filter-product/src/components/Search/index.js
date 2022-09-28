import React, { useState, useContext } from 'react'
import Context from '../../context'

function Search() {
    const ctx = useContext(Context) 
    const [input, setInput] = useState('')
    console.log(input);
    ctx.searchInput = input
    return (
        <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
            <input
                onChange={e => setInput(e.target.value)}
                type="text"
                placeholder="Tìm kiếm khóa học"
                className="form-control border-0 seach-form-input"
            />

            <span className="text-black-50 seach-form-button"><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
    )
}

export default Search