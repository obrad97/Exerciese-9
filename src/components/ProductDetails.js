import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import addToCartIcon from "../images/iconmonstr-plus-2-240 (2).png";
import { addItems } from "../redux/actions/cartActions";
import { displayModal } from "../redux/actions/modalActions";
import { useParams } from "react-router";
import Error from "./Error";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const cart = useSelector((state) => state.cartItems.items);
    const { id } = useParams();
    const {image, title, price, category, description, rating} = product;
    const dispatch = useDispatch();
    const item = cart.findIndex((item)=> Number(item.id) === Number(id));

    const fetchProductDetails = async (id) => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch(err=>{
        console.log("Err", err);
        });
        dispatch(selectedProduct(response.data));
    } 

    const addToCart = () => {
        dispatch(addItems(product));
    }

    useEffect(()=> {
        if(id && id !== "") fetchProductDetails(id);
        return () => {
            dispatch(removeSelectedProduct());
        } 
    },[id])
    
    if (product) {
        return (
            <div className="product-details">
                <div className="product-details-img">
                    <img src={image} alt="product img" />
                </div>
                <div className="product-details-name"><h2>{title}</h2></div>
                <div className="product-details-desc">
                    <p>{description}</p>
                </div>
                <div className="price-category">
                    <p className="product-details-category">{category}</p>
                    <p className="product-details-price">$ {price ? price.toFixed(2): price}</p>
                </div>
                <div className="rating">
                    <p>Rating: {rating ? rating.rate : rating}</p>
                </div>
                <div className="product-details-add-to-cart">
                    {item >= 0 ? <h2>ITEM IS IN CART</h2> : <p onClick={()=> {
                        addToCart() 
                        dispatch(displayModal(title))}}>
                                                            <img src={addToCartIcon} alt="Add to cart icon" /> add to cart</p>}
                </div>
            </div>
        )
    } else {
        <Error/>
    }
}

export default ProductDetails

