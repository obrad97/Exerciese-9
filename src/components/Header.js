import homeIcon from "../images/iconmonstr-home-6-240.png";
import cartIcon from "../images/iconmonstr-shopping-cart-3-240.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    let cart = useSelector(state=> state.cartItems.totalItems)
    return (
        <header>
            <Link to="/">
                <div className="home">
                <img src={homeIcon} alt="home-icon" />
                </div>
            </Link>
            <Link to="/cart">
            <div className="cart-header">
                <div className="cart-quantity">
                {cart > 0 ? <p>{cart}</p> : null}
                </div>
                <img src={cartIcon} alt="cart" />
            </div>
            </Link>
        </header>
    )
}

export default Header

