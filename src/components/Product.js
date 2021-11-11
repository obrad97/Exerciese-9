import { useSelector } from "react-redux";
import addToCartIcon from "../images/iconmonstr-plus-1-240.png";
const Product = () => {
    const products = useSelector((state)=> state.allProducts.product)
    const {id, title} = products[0]; 
    return (
        <div className="product">
            <div className="product-img"></div>
            <h2 className="product-name"></h2>
            <div className="category-price">
            <p className="category"></p>
            <p className="price"></p>
            </div>
            <div className="add-to-cart">
                <img src={addToCartIcon} alt="Add to cart icon" />
                <p>add to cart</p>
            </div>
        </div>
    )
}

export default Product
