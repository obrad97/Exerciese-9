import homeIcon from "../images/iconmonstr-home-6-240.png"
import cartIcon from "../images/iconmonstr-shopping-cart-3-240.png"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to="/">
                <div className="home">
                <img src={homeIcon} alt="home-icon" />
                </div>
            </Link>
            <Link to="/cart">
            <div className="cart">
                <img src={cartIcon} alt="cart" />
            </div>
            </Link>
        </header>
    )
}

export default Header

