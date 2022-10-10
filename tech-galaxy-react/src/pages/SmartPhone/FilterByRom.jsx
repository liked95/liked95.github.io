import React, {useState, useEffect} from 'react'
import filterData from 'data/filterData'

function FilterByRom(props) {
    const [roms, setRoms] = useState([])
    const { onChangeRoms, filters } = props

    const handleChangeRoms = rom => {
        let updateRoms
        if (roms.includes(rom)) {
            updateRoms = roms.filter(r => r != rom)
        } else {
            updateRoms = [...roms, rom]
        }

        setRoms(updateRoms)
    }

    useEffect(() => {
        onChangeRoms(roms)
    }, [roms]);


    return (
        <div class="filter-category">
            <h4 class="filter-title">
                rom
            </h4>

            <form class="filter-option-container" id="rom">
                {filterData.roms.map((rom, index) => (
                    <div class="filter-option" key={index}>
                        <input
                            type="checkbox"
                            name={rom}
                            id={rom}
                            value={rom}
                            onChange={e => handleChangeRoms(e.target.value)}
                            checked={filters.roms && filters.roms.includes(String(rom))}
                        />
                        <label htmlFor={rom}>{rom}GB</label>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default FilterByRom