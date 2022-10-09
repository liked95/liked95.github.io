import React from 'react'
import filterData from 'data/filterData'

function FilterByRom() {
    return (
        <div class="filter-category">
            <h4 class="filter-title">
                rom
            </h4>

            <form class="filter-option-container" id="rom">
                {filterData.roms.map((rom, index) => (
                    <div class="filter-option" key={index}>
                        <input type="checkbox" name={rom} id={rom} value={rom} />
                        <label htmlFor={rom}>{rom}GB</label>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default FilterByRom