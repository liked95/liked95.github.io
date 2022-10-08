import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import Context from '../../../context/Context';


function ProductList() {
    const { products } = useContext(Context);

    return (
        <div className="col-md-8">
            <div className="product-list">
                {products.length > 0 && products.map((item, index) => <ProductItem key={index} item={item} />)}
                {products.length == 0 && <p>Giỏ hàng trống nè</p>}
            </div>
        </div>
    )
}

export default ProductList