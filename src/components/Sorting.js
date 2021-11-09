const Sorting = () => {
    return (
        <div className="sorting">
            <div className='filter'>
                <label htmlFor="filter">Filter</label>
                <select id="filter">
                    <option defaultValue disabled> -- select a filter -- </option>
                    <option value="electroincs">electroincs</option>
                    <option value="jewelery">jewelery</option>
                    <option value="mensClothing">men's clothing</option>
                    <option value="womensClothing">women's clothing</option>
                </select>
            </div>

            <div className='sort-items'>
                <label htmlFor="sort">Sort Items</label>
                <select name="" id="sort">
                    <option defaultValue disabled> -- sort by -- </option>
                    <option value="electroincs">Name (A-Z)</option>
                    <option value="jewelery">Name (Z-A)</option>
                    <option value="mensClothing">Price (low-high)</option>
                    <option value="womensClothing">Price (high-low)</option>
                    <option value="womensClothing">Rating (low-high)</option>
                    <option value="womensClothing">Rating (high-low)</option>
                </select>
            </div>
        </div>
    )
}

export default Sorting


