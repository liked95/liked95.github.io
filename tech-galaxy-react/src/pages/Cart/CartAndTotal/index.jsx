import Context from 'context/index'
import React, {useContext}from 'react'
import CartItem from './CartItem'
import CartTotalCalucation from './CartTotalCalucation'

function CartAndTotal() {
  const {auth, cart} = useContext(Context)
  // console.log(auth, cart);
  let userId = auth.id || -1
  const renderedCart = cart.filter(item => item.userId == userId)
  

  return (
    <div className="cart-and-total">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 cart-detail">
            <div className="cart-title">
              <input type="checkbox" name="toggle-all" id="toggle-all"  />
              <div className="product">Sản phẩm</div>
              <div className="prices">Giá</div>
              <div className="quantity">Số lượng</div>
              <div className="value">Số tiền</div>
              <div className="delete-all">Xóa</div>
            </div>

            <div className="cart-content">
              {renderedCart.length == 0 && <p>Bạn chưa mua sản phẩm nào. Tiếp tục mua và quay lại đây nhé</p>}
              {renderedCart.length > 0 && renderedCart.map((item, index) => <CartItem key={index} item={item}/>)}

            </div>

          </div>



          <CartTotalCalucation renderedCart={renderedCart}/>
        </div>
      </div>
    </div>
  )
}

export default CartAndTotal