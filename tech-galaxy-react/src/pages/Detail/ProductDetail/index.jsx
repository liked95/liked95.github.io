import Context from 'context/index';
import React, { useContext, useState } from 'react'
import { addToCart } from 'store/actions';
import { formatMoney } from 'utils/index';
import MainProductSlider from './MainProductSlider'
import PaymentPromotion from './PaymentPromotion';
import Warranty from './Warranty';








function ProductDetail({ product }) {
    // console.log(product);
    const {cart, dispatchCart, auth} = useContext(Context)

    const { name, mainCarouselImages, dotCarouselImages, colors, detailImgURL, alterOptions, currentPrices, oldPrices, discounts, specAttributes
    } = product

    const [option, setOption] = useState(alterOptions[0])
    const [color, setColor] = useState()
    const [count, setCount] = useState(1)

    const handleCountDecrease = () => {
        if (count > 1) setCount(prev => prev - 1)
    }

    const handleCountIncrease = () => {
        setCount(prev => prev + 1)
    }
    

    const handleAddToCart = () => {
        if (!color) {
            alert("Bạn cần chọn 1 màu!")
            return
        }
        const optionIdx = alterOptions.indexOf(option)
        const colorIdx = colors.indexOf(color)
        const cartItem = {
            productID: product.id,
            userId: auth.id || -1,
            alterOption: option,
            color,
            count,
            name,
            price: currentPrices[optionIdx],
            oldPrice: oldPrices[optionIdx],
            image: dotCarouselImages[colorIdx],
            checked: true,
        }
        dispatchCart(addToCart(cartItem))
        alert("Thêm vào giỏ hàng thành công!")
        
    }




    return (
        <div className="product-detail">
            <div className="container box-main">
                <div className="row">
                    <div className="left-side col-lg-7">
                        <div className="feature-image">
                            <MainProductSlider
                                mainCarouselImages={mainCarouselImages}
                                dotCarouselImages={dotCarouselImages}
                                colors={colors}
                            />
                        </div>

                        <Warranty />

                        <div className="product-detail-image">
                            <img src={process.env.PUBLIC_URL + `/publicImages/product-detail-img/${detailImgURL
                                }`} alt={detailImgURL
                                } />
                        </div>
                    </div>

                    <div className="right-side col-lg-5">
                        <div className="option-container no-scrollbar">
                            {alterOptions.map((alterOption, index) => <button
                                key={index}
                                className={alterOption == option ? 'active' : ''}
                                onClick={e => setOption(e.target.innerHTML)}
                            >
                                {alterOption}
                            </button>)}
                        </div>
                        <div className="color-container no-scrollbar">
                            {colors.map((alterColor, index) => <button
                                key={index}
                                className={alterColor == color ? 'active' : ''}
                                onClick={e => setColor(e.target.innerHTML)}
                            >
                                {alterColor}
                            </button>)}
                        </div>

                        <div className="price-container">
                            <div className="price-caller">Giá giảm cực sốc</div>
                            <div className="price-main">
                                <div className="price-info">
                                    <span className="new-price">
                                        {formatMoney(currentPrices[alterOptions.indexOf(option)])}
                                    </span>
                                    <span className="old-price">
                                        {formatMoney(oldPrices[alterOptions.indexOf(option)])}
                                    </span>
                                    <span className="discount">({formatMoney(discounts[alterOptions.indexOf(option)])}%)</span>
                                </div>

                                <p>Kết thúc 31/11 (Số lượng có hạn)</p>
                            </div>

                        </div>

                        <PaymentPromotion />

                        <div className="quantity-and-cart">
                            <div className="change-quantity">
                                <div className="value-button disabled" id="decrease" value="Decrease Value" onClick={handleCountDecrease}>-</div>
                                <input type="number" id="number" value={count} />
                                <div className="value-button" id="increase" value="Increase Value" onClick={handleCountIncrease}>+</div>
                            </div>

                            <button className="add-to-cart" onClick={handleAddToCart}>thêm vào giỏ hàng</button>
                        </div>

                        <div className="item-spec">
                            <div className="title">
                                Cấu hình <span className="brand">điện thoại</span> <span className="product">{name}</span>
                            </div>

                            <table className="spec-table">
                                <tbody>
                                    {Object.keys(specAttributes).map(key => (
                                        <tr key={key}>
                                            <td className="spec-key"><span>{key}</span>:</td>
                                            <td className="spec-attribute">{specAttributes[key]}</td>
                                        </tr>
                                    ))}

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