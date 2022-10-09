import React, { useState } from 'react';
import { Range } from 'react-range';
import { formatMoney } from 'utils/index';



function FilterByPriceRange() {
    const [value, setValue] = useState([50000000])
    console.log(value)
    return (
        <>
            <h4 class="filter-title">
                giá
            </h4>

            <Range
                step={500000}
                min={0}
                max={100000000}
                values={value}
                onChange={(values) => setValue(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '6px',
                            width: '100%',
                            backgroundColor: '#ccc'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '22px',
                            width: '22px',
                            borderRadius: '100%',
                            backgroundColor: 'blue'
                        }}
                    />
                )}
            />

            <p className='price-range-indicator'>0-{formatMoney(value)}</p>
        </>
    );

}

export default FilterByPriceRange