import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import Product from './Product';
import Sorting from './Sorting';
const StoreItems = () => {
    const dispach = useDispatch()
    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err", err);
        });
        dispach(setProducts(response.data));
    };

    useEffect(()=> {
        fetchProducts();
    }, []);
    return (
        <>
        <Sorting/>
        <div className="store-items">
            <Product/>
        </div>
        </>
    )
}

export default StoreItems
