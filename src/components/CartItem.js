import { useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeItem } from "../redux/actions/cartActions";
import minus from "../images/iconmonstr-minus-2-240.png";
import plus from "../images/iconmonstr-plus-2-240 (1).png";

function CartItem({item}) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="cart-item" key={item.id}>
                <div className="cart-item-image" style={{backgroundImage:`url(${item.image})`}}></div>
                <div className="cart-item-title"><p>{item.title}</p></div>
                <div className="cart-item-price">
                    <div className="price-per-item">
                        <p>Price per item</p>
                        <h2>$ {item.price.toFixed(2)}</h2>
                    </div>
                    <div className="item-quantity">
                        <p>quantity</p>
                        <div className="quantity">
                            <img src={minus} alt='minus-ico' onClick={()=> {
                                if (item.count > 1) {
                                    dispatch(decrementItem(item))
                                }
                            }}/>
                            <h2>{item.count}</h2>
                            <img src={plus} alt='plus-ico'onClick={()=>{
                                dispatch(incrementItem(item))
                            }}/>
                        </div>
                    </div>
                    <div className="total-item-price">
                        <p>Total</p>
                        <h2>$ {(item.price* item.count).toFixed(2)}</h2>
                    </div>
                </div>
                <div className="remove">
                    <button type="button" onClick={(e)=>{
                        e.preventDefault();
                        dispatch(removeItem(item));
                    }}>Remove Item</button>
                </div>
            </div>
        </>
    )
}

export default CartItem
