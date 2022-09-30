import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import Context from '../../../context/Context';


function ProductList() {
    const { cartItems } = useContext(Context);

    return (
        <div className="col-md-8">
            <div className="product-list">
                {cartItems.length > 0 && cartItems.map((item, index) => <ProductItem key={index} item={item} />)}
                {cartItems.length == 0 && <p>Giỏ hàng trống nè</p>}
            </div>
        </div>
    )
}

export default ProductList