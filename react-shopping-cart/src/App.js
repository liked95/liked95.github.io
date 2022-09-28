
import './App.css';
import React, { useContext, useState } from 'react';
import Context from './context';
import ProductList from './components/ProductList'
import Bill from './components/Bill'


function App() {
    const [state] = useContext(Context)
    const [input, setInput] = useState("")

    return (
        <div className="shopping-cart-container mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-4">
                            <h2>Shopping Cart</h2>
                        </div>
                    </div>
                </div>

                {state.length == 0 && <p className="fst-italic message">Không có sản phẩm trong giỏ hàng</p>}
                <div className="row shopping-cart">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        {state.length != 0 && <Bill />}
                    </div>
                </div>

                <input
                    placeholder='Test Hook'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </div>
    );
}

export default App;
