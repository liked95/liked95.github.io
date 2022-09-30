import React, {useContext} from 'react'
import Context from '../../../context/Context'
import { formatMoney } from '../../../utils/utils'

function BillInformation() {
    const {cartItems} = useContext(Context)
    const subTotal = cartItems.reduce((total, item) => total + item.price*item.count, 0)
    
    return (
        <div className="col-md-4">
            <div className="bill">
                <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                    <span className="text-black-50">Tạm tính:</span>
                    <span className="text-primary" id="sub-total-money">
                    {formatMoney(subTotal)}
                    </span>
                </div>
                <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center discount-box">
                    <span className="text-black-50">VAT (10%):</span>
                    <span className="text-primary" id="discount-money">
                    {formatMoney(subTotal*0.1)}
                    </span>
                </div>
                <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                    <span className="text-black-50">Thành tiền:</span>
                    <span className="text-primary" id="total-money">
                    {formatMoney(subTotal*1.1)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BillInformation