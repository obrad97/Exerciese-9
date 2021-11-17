import { useSelector } from "react-redux";
import CartItem from "./CartItem";
function Cart() {
    const cart = useSelector(state=> state.cartItems.items);
    const totalPrice = useSelector(state => state.cartItems.sum)
    return (
        <div className='cart'>
            {cart.length > 0 ? cart.map((item)=> <CartItem item={item} key={item.id}/>) : <p>Cart is empty</p>}
            {cart.length > 0 ? 
            <div className="total-price-container">
                <div className="total-price">
                    <h2>Total Price:</h2>
                    <h1>{`$${totalPrice.toFixed(2)}`}</h1>
                </div>
            </div> : null}
        </div>
    )
}

export default Cart
