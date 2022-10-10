import React, { useState, useEffect } from 'react'
import filterData from 'data/filterData'

function FilterByRam(props) {
    const [rams, setRams] = useState([])
    const { onChangeRams, filters } = props

    const handleChangeRams = ram => {
        let updateRams
        if (rams.includes(ram)) {
            updateRams = rams.filter(r => r != ram)
        } else {
            updateRams = [...rams, ram]
        }

        setRams(updateRams)
    }

    useEffect(() => {
        onChangeRams(rams)
    }, [rams]);

    return (
        <div class="filter-category">
            <h4 class="filter-title">
                ram
            </h4>

            <form class="filter-option-container" id="ram">
                {filterData.rams.map((ram, index) => (
                    <div class="filter-option" key={index}>
                        <input type="checkbox"
                            name={ram}
                            id={ram}
                            value={ram}
                            onChange={e => handleChangeRams(e.target.value)}
                            checked={filters.rams && filters.rams.includes(String(ram))}
                        />
                        <label htmlFor={ram}>{ram}GB</label>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default FilterByRam