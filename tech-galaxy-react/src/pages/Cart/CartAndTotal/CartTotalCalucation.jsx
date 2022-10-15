import React from 'react'
import { formatMoney } from 'utils/index';


function CartTotalCalucation({ renderedCart }) {
    let total = 0
    for (let item of renderedCart) {
        if (item.checked) total += item.price * item.count
    }
    console.log(total);

    return (
        <div className="col-lg-4 total-cart-container">
            <div className="total-value">
                <span>Tiền hàng</span>
                <span>{formatMoney(total)}</span>
            </div>

            <div className="shipment-fee">
                <span>
                    Phí vận chuyển
                    <i data-toggle="tooltip" data-placement="top" data-trigger="click"
                        title="Chọn địa chỉ để hiện phí ship" className="fa-solid fa-circle-question"></i>
                </span>
                <span>0</span>
            </div>

            <div className="discount">
                <span>Chiết khấu</span>
                <span>0</span>
            </div>

            <div className="pretax-value">
                <span>Tạm tính</span>
                <span>0</span>
            </div>

            <div className="vat">
                <span>VAT (8%)</span>
                <span>0</span>
            </div>

            <div className="grand-total fw-bold">
                <span>Tổng cộng</span>
                <span>0</span>
            </div>

            <div className="voucher-container">

                <div className="voucher-field-container">
                    <div className="form-floating">
                        <i data-toggle="tooltip" data-placement="right" data-trigger="click" title=""
                            className="fa-solid fa-circle-question" data-html="true" data-original-title=""></i>
                        <input type="text" className="form-control" id="voucher-field" placeholder="MGG" defaultValue={''} />
                        <label htmlFor="voucher-field">Mã giảm giá</label>
                    </div>
                </div>

                <button id="voucher-apply-btn">Áp dụng</button>

            </div>
        </div>
    )
}

export default CartTotalCalucation