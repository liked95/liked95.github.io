import React, { useContext } from 'react'
import { formatMoney } from '../../../utils/utils';
import Context from '../../../context/Context';
import { addCount, deleteItem, subtractCount } from '../../../store/actions';


function ProductItem({ item }) {
    const { id, title, image, price, count } = item

    const { dispatchCart } = useContext(Context)
    const { products } = useContext(Context)

    const handleAddCount = id => {
        dispatchCart(addCount(id))
    }

    const handleSubtractCount = id => {
        let item = products.find(item => item.id == id)
        if (item.count <= 1) return
        dispatchCart(subtractCount(id))
    }

    const handleDeleteItem = id => {
        dispatchCart(deleteItem(id))
    }
    
    return (
        <div className="product-item d-flex border mb-4">
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-dark fs-5 fw-normal">
                            {title}
                        </h2>
                        <h2 className="text-danger fs-5 fw-normal">
                            {formatMoney(price)}
                        </h2>
                    </div>
                    <div className="text-black-50">
                        <div className="d-inline-block me-3">
                            <button
                                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                onClick={() => handleSubtractCount(id)}
                            >
                                -
                            </button>
                            <span className="py-2 px-3 d-inline-block fw-bold">
                                {count}
                            </span>
                            <button
                                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                onClick={() => handleAddCount(id)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="text-primary border-0 bg-transparent fw-light"
                        onClick={() => handleDeleteItem(id)}
                    >
                        <span>
                            <i className="fa-solid fa-trash-can"></i>
                        </span>
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem