import React, { } from 'react'
import MainProductSlider from './MainProductSlider'








function ProductDetail({ product }) {
    console.log(product);

    const { mainCarouselImages, dotCarouselImages, colors } = product
    return (
        <div className="product-detail">
            <div className="container box-main">
                <div className="row">
                    <div className="left-side col-lg-7">
                        <div className="feature-image">
                            {/* {mainCarouselImages.map((image, index) => (
                                    <div key={index}>
                                        {console.log(image)}
                                        <img src={process.env.PUBLIC_URL + `/publicImages/main-carousel-images/${image}`} alt={image}/>
                                        <p className="legend">Legend 1</p>
                                    </div>
                                ))} */}

                            <MainProductSlider
                                mainCarouselImages={mainCarouselImages}
                                dotCarouselImages={dotCarouselImages}
                                colors = {colors}
                            />
                        </div>

                        <div className="warranty">
                            <div className="warranty-claim">
                                <span className="warranty-icon"><i className="fa-solid fa-money-bill"></i></span>
                                <span className="warranty-description">Hư gì đổi nấy 12 tháng tại 999 siêu thị toàn quốc (miễn
                                    phí
                                    tháng đầu)</span>
                            </div>

                            <div className="warranty-claim">
                                <span className="warranty-icon"><i className="fa-solid fa-calendar-check"></i></span>
                                <span className="warranty-description">Bảo hành chính hãng 1 năm tại các trung tâm bảo hành hãng
                                </span>
                            </div>

                            <div className="warranty-claim">
                                <span className="warranty-icon"><i className="fa-solid fa-box"></i></span>
                                <span className="warranty-description">Sản phẩm nguyên seal, đầy đủ phụ kiện</span>
                            </div>
                        </div>

                        <div className="product-detail-image">

                        </div>
                    </div>

                    <div className="right-side col-lg-5">
                        <div className="option-container no-scrollbar">

                        </div>
                        <div className="color-container no-scrollbar">

                        </div>

                        <div className="price-container">
                            <div className="price-caller">Giá giảm cực sốc</div>
                            <div className="price-main">
                                <div className="price-info">
                                    <span className="new-price"></span>
                                    <span className="old-price"></span>
                                    <span className="discount">(-20%)</span>
                                </div>

                                <p>Kết thúc 31/8 (Số lượng có hạn)</p>
                            </div>

                        </div>

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

                        <div className="quantity-and-cart">
                            <div className="change-quantity">
                                <div className="value-button disabled" id="decrease" value="Decrease Value">-</div>
                                <input type="number" id="number" />
                                <div className="value-button" id="increase" value="Increase Value">+</div>
                            </div>

                            <button className="add-to-cart">thêm vào giỏ hàng</button>
                        </div>

                        <div className="item-spec">
                            <div className="title">
                                Cấu hình <span className="brand">điện thoại</span> <span className="product">iPhone 13 Pro</span>
                            </div>

                            <table className="spec-table">
                                <tbody>


                                </tbody>
                            </table>
                        </div>

                        <div className="promotion-info">
                            <div className="promotion-title">
                                <h4>Khuyến mãi</h4>
                                <p>Giá và khuyến mãi dự kiến áp dụng đến 23:59 17/10</p>
                            </div>
                            <div className="promotion-items">
                                <p>Giảm giá 50% gói bảo hành mở rộng thêm 1 năm (chính hãng)</p>
                                <p>Giảm đến 1,500,000đ khi Thu cũ Đổi mới (tùy model máy cũ;
                                    không áp dụng kèm giảm giá qua VNPAY, Moca)</p>
                                <p>Giảm giá 25% iPad Pro M1 12.9" (khi mua kèm iPhone
                                    (Không áp dụng kèm khuyến mãi khác của iPad)</p>
                                <p>Giảm 50% giá gói cước 1 năm (Vina350/Vina500) cho Sim
                                    VinaPhone trả sau (Trị giá đến 3 triệu)</p>
                                <p>Nhập mã TECH123 giảm 5% tối đa 400.000đ cho đơn hàng từ
                                    500.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail