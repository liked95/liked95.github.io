import React, {useContext, memo} from 'react'
import Context from '../../context'
import ProductItem from './ProductItem'




function ProductList() {
    const [state, dispatch] = useContext(Context)

    


    return (
        <div className="product-list">
            {state.map((item, index) => <ProductItem key={index} props={item}/>)}
        </div>
    )
}

export default memo(ProductList)