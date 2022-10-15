import Context from 'context/index'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { decreaseCount, deleteCartItem, increaseCount, toggleChecked } from 'store/actions'
import { formatMoney } from 'utils/index'

function CartItem({ item }) {
    const { dispatchCart } = useContext(Context)
    const { name, color, count, alterOption, image, price, oldPrice, checked, productID, userId } = item


    const handleToggleChecked = (userId, productID, alterOption, color) => {
        dispatchCart(toggleChecked({ userId, productID, alterOption, color }))
    }

    const handleDecreaseCount = (userId, productID, alterOption, color) => {
        if (count <= 1) return;
        dispatchCart(decreaseCount({ userId, productID, alterOption, color }))
    }

    const handleIncreaseCount = (userId, productID, alterOption, color) => {
        dispatchCart(increaseCount({ userId, productID, alterOption, color }))
    }

    const handleDeleteCartItem = (userId, productID, alterOption, color) => {
        dispatchCart(deleteCartItem({ userId, productID, alterOption, color }))
    }

    return (
        <div className="cart-item">

            <input type="checkbox" className="choose-item" checked={checked} onChange={e => handleToggleChecked(userId, productID, alterOption, color)} />

            <Link to={`/detail?id=${productID}`} className="product">
                <div className="cart-item-image">
                    <img src={process.env.PUBLIC_URL + `/publicImages/thumnail-carousel/${image}`} alt={image} />
                </div>

                <div className="cart-item-detail">
                    <div className="product-name">{name}</div>
                    <div className="product-attr">({color}, {alterOption})</div>
                </div>
            </Link>

            <div className="prices">
                <div className="new-price">{formatMoney(price)}</div>
                <div className="old-price">{formatMoney(oldPrice)}</div>
            </div>

            <div className="quantity">
                <div
                    className="value-button"
                    id="decrease"
                    value="Decrease Value"
                    onClick={e => handleDecreaseCount(userId, productID, alterOption, color)}
                >
                    -
                </div>
                <span type="number" id="number">{count}</span>
                <div
                    className="value-button"
                    id="increase"
                    value="Increase Value"
                    onClick={e => handleIncreaseCount(userId, productID, alterOption, color)}
                >
                    +
                </div>
            </div>

            <div className="value">{formatMoney(price * count)}</div>

            <div className="delete-item" onClick={e=>handleDeleteCartItem(userId, productID, alterOption, color)}>
                <i className="fa-solid fa-circle-minus"></i>
            </div>
        </div>
    )
}

export default CartItem