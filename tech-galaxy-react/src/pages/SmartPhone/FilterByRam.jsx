import React from 'react'
import filterData from 'data/filterData'

function FilterByRam(props) {
    
    return (
        <div class="filter-category">
            <h4 class="filter-title">
                ram
            </h4>

            <form class="filter-option-container" id="ram">
                {filterData.rams.map((ram, index) => (
                    <div class="filter-option" key={index}>
                        <input type="checkbox" name={ram} id={ram} value={ram} />
                        <label htmlFor={ram}>{ram}GB</label>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default FilterByRam