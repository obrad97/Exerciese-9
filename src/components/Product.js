import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import addToCartIcon from "../images/iconmonstr-plus-2-240 (2).png";
import { addItems} from "../redux/actions/cartActions";
import { displayModal } from "../redux/actions/modalActions";

const Product = () => {
    const products = useSelector((state)=> state.allProducts.showProducts);
    const cart = useSelector((state) => state.cartItems.items);
    const dispatch = useDispatch();

    const addToCart = (index) => {
        const item = products.find((product)=> Number(product.id) === Number(index))
        dispatch(addItems(item))
    }

    const checkIfAdded = (index, title) => {
        const item = cart.findIndex((item)=> Number(item.id) === Number(index));
        let result;
        if (item >= 0){
            result = <h2>ITEM IS IN CART</h2>;
        } else {
            result = <p onClick={()=>{
                addToCart(index)
                dispatch(displayModal(title))
            }}><img src={addToCartIcon} alt="Add to cart icon" /> add to cart</p>;
        }

        return result;
    } 

    return (
        <>
            {products.map((product)=> {
            const {id, title, image, price, category} = product;
            return (
                <div className="product" key={id}>
                    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="product-img" style={{backgroundImage:`url(${image})`}}></div>
                        <h2 className="product-name"> {title}</h2> 
                        <div className="category-price">
                            <p className="category">{category}</p>
                            <p className="price">$ {price.toFixed(2)}</p>
                        </div>
                    </Link>
                    <div className="add-to-cart">
                        {checkIfAdded(id, title)}
                    </div>
            </div>
            )
        })}
        </>
    )
}

export default Product
