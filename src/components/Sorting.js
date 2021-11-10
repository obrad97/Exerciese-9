
const Sorting = ({count, categories, sort, filter, sortProducts, filterProducts}) => {
    return (
        <div className="sorting">
            <div className='filter'>
                <label htmlFor="filter">Filter</label>
                <select id="filter" defaultValue={'DEFAULT'} onChange={filterProducts}>
                    <option value="DEFAULT" disabled>-- select a filter -- </option>
                    <option value="ALL">ALL</option>
                    {categories.map((category, index)=> (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className='sort-items'>
                <label htmlFor="sort">Sort Items</label>
                <select id="sort" defaultValue={'DEFAULT'} onChange={sortProducts}>
                    <option value="DEFAULT" disabled> -- sort by -- </option>
                    <option value="ALL">ALL</option>
                    <option value="0">Name (A-Z)</option>
                    <option value="1">Name (Z-A)</option>
                    <option value="2">Price (low-high)</option>
                    <option value="3">Price (high-low)</option>
                    <option value="4">Rating (low-high)</option>
                    <option value="5">Rating (high-low)</option>
                </select>
            </div>
        </div>
    )
}

export default Sorting


