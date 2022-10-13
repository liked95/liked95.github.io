import React from 'react'

function PaymentPromotion() {
    return (
        <div className="payment-box">
            <h4>Ưu đãi thanh toán</h4>
            <div className="payment-promotion no-scrollbar">
                <div className="payment-company">
                    <div className="payment-logo">

                    </div>
                    <p className="payment-discount">
                        Giảm <b>500.000đ</b>
                    </p>
                    <p className="discount-item">Đối với iPhone</p>
                </div>

                <div className="payment-company">
                    <div className="payment-logo">

                    </div>
                    <p className="payment-discount">
                        Giảm <b>300.000đ</b>
                    </p>
                    <p className="discount-item">Sản phẩm từ 8tr</p>
                </div>

                <div className="payment-company">
                    <div className="payment-logo">

                    </div>
                    <p className="payment-discount">
                        Giảm <b>200.000đ</b>
                    </p>
                    <p className="discount-item">Sản phẩm từ 3tr</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentPromotion