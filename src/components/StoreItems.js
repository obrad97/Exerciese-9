import { useSelector } from 'react-redux';
import product from './Product';
const StoreItems = ({items}) => {
    const products = useSelector((state)=> state)
    return (
        <div className="store-items">
        </div>
    )
}

export default StoreItems
