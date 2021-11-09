import homeIcon from "../images/iconmonstr-home-6-240.png"
import cartIcon from "../images/iconmonstr-shopping-cart-3-240.png"

const Header = () => {
    return (
        <header>
            <div className="home">
            <img src={homeIcon} alt="home-icon" />
            </div>
            <div className="cart">
                <img src={cartIcon} alt="cart" />
            </div>
        </header>
    )
}

export default Header

