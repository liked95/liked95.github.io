import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import Context from "context/Context";
import { formatMoney } from "utils/utils";
import { addOrder, clearCart } from "store/actions";

function Checkout() {
    const { auth, products, dispatchOrders, orders, dispatchCart } = useContext(Context)

    const [name, setName] = useState(() => {
        return auth.id ? auth.name : ""
    })

    const [email, setEmail] = useState(() => {
        return auth.id ? auth.email : ""
    })
    
    const [phone, setPhone] = useState(() => {
        return auth.id ? auth.phone : ""
    })

    const [checked, setChecked] = useState('transfer');


    let subTotal = products.reduce((total, product) => total + product.count * product.price, 0)


    const handleAddOrder = () => {
        if (!auth.id) {
            alert("Thanh toán thành công nhưng k lưu lịch sử tt")
            return
        }

        const newOrder = {
            id: orders.length + 1,
            userId: auth.id,
            items: products,
            createdAt: new Date().toString(),
            paymentMethod: checked,
            total: subTotal * 1.1,
        }

        dispatchOrders(addOrder(newOrder))
        dispatchCart(clearCart())
        alert("Thanh toán thành công và lưu lịch sử")
    }



    return (
        <div className="shopping-cart-container my-5">
            <div className="container">
                <div className="mb-4">
                    <nav
                        style={{ "--bs-breadcrumb-divider": ">" }}
                        aria-label="breadcrumb"
                    >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/gio-hang">Giỏ hàng</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Thanh toán
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="p-4 shadow-sm">
                            <h2 className="fs-5 fw-normal mb-3">
                                1. Thông tin tài khoản
                            </h2>
                            <div className="account-info d-flex mb-4">
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    placeholder="Nhập tên"
                                    className="form-control flex-grow-1"
                                />
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="Nhập email"
                                    className="form-control flex-grow-1 mx-2"
                                />
                                <input
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    className="form-control flex-grow-1"
                                />
                            </div>

                            <h2 className="fs-5 fw-normal mb-3 mt-5">
                                2. Phương thức thanh toán
                            </h2>
                            <div className="payment methods">
                                <div className="topic-item input-group d-flex align-items-center mb-1">
                                    <input
                                        onChange={e => setChecked(e.target.value)}
                                        type="radio"
                                        value="transfer"
                                        id="transfer"
                                        checked={checked == "transfer"}
                                    />
                                    <label htmlFor="transfer" className="ms-2">
                                        Chuyển khoản
                                    </label>
                                </div>
                                <div className="topic-item input-group d-flex align-items-center mb-1">
                                    <input
                                        onChange={e => setChecked(e.target.value)}
                                        type="radio"
                                        value="direct"
                                        id="direct"
                                        checked={checked == "direct"}
                                    />
                                    <label htmlFor="direct" className="ms-2">
                                        Thanh toán trực tiếp
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 shadow-sm">
                            <div className="order-detail">
                                <h2 className="fs-5 fw-normal mb-4">
                                    Đơn hàng
                                </h2>

                                <div className="order-items">
                                    {products.map(product => (
                                        <div key={product.id}
                                            className="order-item d-flex justify-content-between align-items-center"
                                        >
                                            <p className="text-black-50">
                                                {product.title}
                                            </p>
                                            <p className="fw-bold">
                                                {formatMoney(product.price)}&nbsp; x {product.count}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                                    <p className="text-black-50 fw-bold">
                                        Thành tiền
                                    </p>
                                    <p className="fw-bold">{formatMoney(subTotal)}</p>
                                </div>

                                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                                    <p className="text-black-50 fw-bold">VAT</p>
                                    <p className="fw-bold">{formatMoney(subTotal * 0.1)}</p>
                                </div>

                                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4 pb-4">
                                    <p className="text-black-50 fw-bold">
                                        Tổng cộng
                                    </p>
                                    <p className="fw-bold">{formatMoney(subTotal * 1.1)}</p>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button
                                        onClick={handleAddOrder}
                                        className="btn btn-primary"
                                        id="btn-submit"
                                    >
                                        Gửi đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
