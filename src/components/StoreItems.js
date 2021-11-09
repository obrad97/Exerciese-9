import Item from './Item';
const StoreItems = ({items}) => {
    return (
        <div className="store-items">
            {items.map((item)=> (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default StoreItems
