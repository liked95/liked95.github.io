import React, { useContext } from "react";
import Context from "context/Context";
import { formatMoney } from "utils/utils";

function OrderHistory() {
    const { orders, auth } = useContext(Context)
    // Lay ra order trung voi userID
    const thisOrders = orders.filter(order => order.userId == auth.id)
    console.log(thisOrders)




    return (
        <section className="py-5">
            <div className="container">
                <h1 className="fs-4 mb-5">Lịch sử đơn hàng</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Danh sách item</th>
                            <th>Ngày đăng ký</th>
                            <th>Hình thức thanh toán</th>
                            <th>Tổng tiền đơn hàng (đã bao gồm VAT - 10%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thisOrders.length > 0 && thisOrders.map((order, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>
                                    <ul>
                                        {order.items.map((item, itemIdx) => (
                                            <li key={itemIdx}>
                                                {item.title} ({formatMoney(item.price)} - {item.count})
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td>{order.createdAt}</td>
                                <td>{order.paymentMethod == 'direct' ? "Thanh toán trực tiếp" : "Chuyển khoản ngân hàng"}</td>
                                <td>{formatMoney(order.total)}</td>
                            </tr>
                        ))}

                        {thisOrders.length == 0 && <h3>Bạn chưa mua hàng lần nào :v</h3>}


                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default OrderHistory;
