import addToCartIcon from "../images/iconmonstr-plus-1-240.png";
const Item = ({item}) => {
    return (
        <div className="product">
            <div className="product-img" style={{backgroundImage:`url(${item.image})`}}></div>
            <h2 className="product-name">{item.title}</h2>
            <div className="category-price">
            <p className="category">{item.category}</p>
            <p className="price">{`$${item.price.toFixed(2)}`}</p>
            </div>
            <div className="add-to-cart">
                <img src={addToCartIcon} alt="Add to cart icon" />
                <p>add to cart</p>
            </div>
        </div>
    )
}

export default Item
