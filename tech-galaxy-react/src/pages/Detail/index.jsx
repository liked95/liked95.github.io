import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import DetailHeading from './DetailHeading/index'
import queryString from 'query-string'
import Context from 'context/index'
import ProductDetail from './ProductDetail/index'

function Detail() {
    const location = useLocation()
    const params = queryString.parse(location.search)
    const id = +params.id
    const {products} = useContext(Context)
    const product = products.find(p => p.id == id)
   
    return (
        <>
           <DetailHeading product={product}/>
           <ProductDetail product={product} />


        </>
    )
}

export default Detail