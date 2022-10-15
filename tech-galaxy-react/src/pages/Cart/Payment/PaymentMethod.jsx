import React from 'react'

function PaymentMethod() {
    return (
        <div className="col-lg-4 col-md-6 payment-method-container">

            <h4>Phương thức thanh toán</h4>
            <div className="payment-method">
                <input type="radio" name="method" id="cash" />
                <label htmlFor="cash">Bằng tiền mặt khi giao hàng</label>
                <span><i className="fa-solid fa-money-bill-1"></i></span>
            </div>

            <div className="payment-method">
                <input type="radio" name="method" id="bank" />
                <label htmlFor="bank">Chuyển khoản ngân hàng</label>
                <span><i className="fa-solid fa-house-chimney-crack"></i></span>
            </div>

            <div className="payment-method">
                <input type="radio" name="method" id="credit" />
                <label htmlFor="credit">Trả góp qua thẻ tín dụng</label>
                <span><i className="fa-brands fa-cc-visa"></i></span>
            </div>

            <div className="payment-method">
                <input type="radio" name="method" id="wallet" />
                <label htmlFor="wallet">Thanh toán qua ví điện tử</label>
                <span><i className="fa-solid fa-wallet"></i></span>
            </div>

            <div className="payment-btn-area">
                <div className="go-back-btn">
                    <span><i className="fa-solid fa-caret-left"></i></span>
                    Tiếp tục mua hàng
                </div>

                <button id="pay-btn">Thanh toán</button>
            </div>
        </div>
    )
}

export default PaymentMethod