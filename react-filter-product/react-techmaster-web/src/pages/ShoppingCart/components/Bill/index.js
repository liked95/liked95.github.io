import React, { useContext, useEffect, useMemo, memo } from 'react'
import Context from '../../../../context/Context'
import formatVND from '../../../../utils/utils'

function Bill() {
    const [state] = useContext(Context)
    console.log("Bill re-render")

    // const [total, setTotal] = useState(() => state.reduce((prev, cur) => prev + cur.count*cur.price, 0))
    // let total = useMemo(() => state.reduce((prev, cur) => prev + cur.count*cur.price, 0), [state])
    let total = useMemo(() => {
        const res = state.reduce((prev, cur) => {
            console.log("Calc again")
            return prev + cur.count * cur.price
        }, 0)

        return res
    }, [state])



    return (
        <div className="bill">
            <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">Tạm tính:</span>
                <span className="text-primary" id="sub-total-money">{formatVND(total)}</span>
            </div>
            <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">VAT (10%):</span>
                <span className="text-primary" id="vat-money">{formatVND(total * 0.1)}</span>
            </div>
            <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">Thành tiền:</span>
                <span className="text-primary" id="total-money">{formatVND(total * 1.1)}</span>
            </div>
        </div>
    )
}

export default memo(Bill)