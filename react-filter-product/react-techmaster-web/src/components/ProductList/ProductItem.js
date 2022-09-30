import React, {useContext, memo} from 'react'
import Context from '../../context'
import formatVND from '../../store/formatVND'
import {increaseItem, decreaseItem, deleteItem} from "../../store/actions"

function ProductItem({ props }) {
    const [state, dispatch] = useContext(Context)
    
    const { id, name, image, price, count, size } = props
    console.log("render Product item")


    const handleIncrease = id => {
        dispatch(increaseItem(id))  
    }
    
    const handleDecrease = id => {
        let product = state.find(product => product.id == id)
        if (product.count <= 1) return;
        dispatch(decreaseItem(id))
    }

    const handleDelete = id => {
        dispatch(deleteItem(id))
    }



    return (
        <div className="product-item d-flex border mb-4">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-dark fs-5 fw-normal">
                            {name} ({size})
                        </h2>
                        <h2 className="text-danger fs-5 fw-normal">
                            {formatVND(price)}
                        </h2>
                    </div>
                    <div className="text-black-50">
                        <div className="d-inline-block me-3">
                            <button
                                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                onClick={() => handleDecrease(id)}
                            >-</button>
                            <span className="py-2 px-3 d-inline-block fw-bold">{count}</span>

                            <button className="border py-2 px-3 d-inline-block fw-bold bg-light"
                            onClick={() => handleIncrease(id)}

                            >+</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button 
                    className="text-primary border-0 bg-transparent fw-light"
                    onClick={() => handleDelete(id)}
                    >
                        <span><i className="fa-solid fa-trash-can"></i></span>
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem