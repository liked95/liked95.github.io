import Context from 'context/index'
import React, { useContext } from 'react'
import ProductSlider from '../ProductSlider'


function RelatedProducts({ product }) {
  let { products } = useContext(Context)
  products = products.filter(p => p.brand == product.brand && p.category == 'smartphone')

  return (
    <div className="related-products">
      <div className="container">
        <h4>Sản phẩm liên quan</h4>
        <div id="related-product-carousel" className="owl-carousel">
          <ProductSlider products={products} />
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts