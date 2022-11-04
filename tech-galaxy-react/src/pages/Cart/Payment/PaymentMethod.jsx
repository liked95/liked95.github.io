import React from 'react'
import { useState } from 'react'
import { Modal } from "react-bootstrap";
function PaymentMethod() {
    const [payment, setPayment] = useState("")

    const [active, setActive] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const toggleConfirm = () => {
    //     setActive(!active)
    // }

    return (
        <>
            <div className="col-lg-4 col-md-6 payment-method-container">

                <h4>Phương thức thanh toán</h4>
                <div className="payment-method">
                    <input type="radio" name="method" id="cash"
                        onChange={e => setPayment(e.target.id)}
                        checked={payment == "cash"} />
                    <label htmlFor="cash">Bằng tiền mặt khi giao hàng</label>
                    <span><i className="fa-solid fa-money-bill-1"></i></span>
                </div>

                <div className="payment-method">
                    <input type="radio" name="method" id="bank"
                        onChange={e => setPayment(e.target.id)}
                        checked={payment == "bank"} />
                    <label htmlFor="bank">Chuyển khoản ngân hàng</label>
                    <span><i className="fa-solid fa-house-chimney-crack"></i></span>
                </div>

                <div className="payment-method">
                    <input type="radio" name="method" id="credit"
                        onChange={e => setPayment(e.target.id)}
                        checked={payment == "credit"} />
                    <label htmlFor="credit">Trả góp qua thẻ tín dụng</label>
                    <span><i className="fa-brands fa-cc-visa"></i></span>
                </div>

                <div className="payment-method">
                    <input type="radio" name="method" id="wallet"
                        onChange={e => setPayment(e.target.id)}
                        checked={payment == "wallet"} />
                    <label htmlFor="wallet">Thanh toán qua ví điện tử</label>
                    <span><i className="fa-solid fa-wallet"></i></span>
                </div>

                <div className="payment-btn-area">
                    <div className="go-back-btn">
                        <span><i className="fa-solid fa-caret-left"></i></span>
                        Tiếp tục mua hàng
                    </div>

                    <button id="pay-btn" onClick={handleShow}>Thanh toán</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận thanh toán</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="payment-item-container" className="position-relative">
                        <div className="payment-item-content">

                        </div>
                        <div className="fade-btn-container d-flex justify-content-center">
                            <button id="expand-cart-btn">Xem tất cả <span id="product-type-quantity"></span> loại sản
                                phẩm</button>
                        </div>
                    </div>

                    <div className="row" id="payment-shipment-info">
                        <div className="total-cart-container col-6">
                            <h6 className="text-center mb-3">Tổng quan đơn hàng</h6>
                            <div className="total-value">
                                <span>Tiền hàng</span>
                                <span>0</span>
                            </div>

                            <div className="shipment-fee">
                                <span>Phí vận chuyển</span>
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


                        </div>

                        <div className="receiver-info col-6">
                            <h6 className="text-center mb-3">Thông tin người nhận</h6>
                            <p>Họ và tên: <span id="order-name"></span></p>
                            <p>Số điện thoại <span id="order-phone"></span></p>
                            <p>Địa chỉ: <span id="order-address"></span></p>
                            <p>Phương thức thanh toán: <span id="order-payment-method"></span></p>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Đóng</button>
                    <button type="button" className="btn btn-primary" id="confirm-btn">Xác nhận thanh toán</button>
                </Modal.Footer>
            </Modal>

        </>


    )
}

export default PaymentMethod