import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setCatergotyFilter } from "../redux/actions/productActions";
import { sortItems, filterItems } from "../redux/actions/productActions";

const Sorting = () => {
    const categories = useSelector((state) => state.allProducts.categories);
    const products = useSelector((state)=> state.allProducts.showProducts);
    const defaultProducts = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch()
    const fetchCategories = async() => {
        const response = await axios
        .get('https://fakestoreapi.com/products/categories')
        .catch((err)=> {
            console.log("Err", err);
        })
        dispatch(setCatergotyFilter(response.data))
    }
    
    useEffect(()=>{
        fetchCategories()
    },[])

    const sortDetails = [
        {sortDirection: 'default', name: "initial", option: "Default"},
        {sortDirection: "Asc" , name: "title", option: "Name (A-Z)"},
        {sortDirection: "Dsc", name: "title", option: "Name (Z-A)"},
        {sortDirection: "Asc", name: "price", option: "Price low-high"},
        {sortDirection: "Dsc", name: "price", option: "Price high-low"},
        {sortDirection: "Asc", name: "rating", option: "Rating low-high"},
        {sortDirection: "Dsc", name: "rating", option: "Rating high-low"},
    ]

    const sortProducts = (value) => {
        let showProducts = [...products]
        switch (value.name) {
            case 'initial': 
                    showProducts = [...defaultProducts]
                break;
            case 'title': 
                if (value.sortDirection === 'Asc'){ showProducts.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))}
                else{ showProducts.sort((a,b) => (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0))}
                break;
            case 'price':
                if (value.sortDirection === 'Asc'){ showProducts.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))}
                else{ showProducts.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))}
                break;
            case 'rating':
                if (value.sortDirection === 'Asc'){ showProducts.sort((a,b) => (a.rating.rate > b.rating.rate) ? 1 : ((b.rating.rate > a.rating.rate) ? -1 : 0))}
                else{ showProducts.sort((a,b) => (a.rating.rate < b.rating.rate) ? 1 : ((b.rating.rate < a.rating.rate) ? -1 : 0))}
                break;
            default:
        }
        dispatch(sortItems(showProducts))
    }

    const filterProducts = (value) => {
        let showProducts = [...defaultProducts]
        let filtered ;
            if (value === 'All') {
                filtered = [...defaultProducts];
            } else {
                filtered = showProducts.filter((product) => value === product.category)
            }
        dispatch(filterItems(filtered))
    }
    return (
        <div className="sorting">
            <div className='filter'>
                <label htmlFor="filter">Filter</label>
                <select id="filter" defaultValue={'DEFAULT'} onChange={(e)=> {
                    filterProducts(e.target.value)
                }}>
                    <option value="DEFAULT" disabled>-- select a filter -- </option>
                    <option value="All">ALL</option>
                    {categories.map((category, i)=> 
                        <option key={i} value={category}>{category}</option>
                    )}
                </select>
            </div>

            <div className='sort-items'>
                <label htmlFor="sort">Sort Items</label>
                <select id="sort" defaultValue={'DEFAULT'} onChange={(e)=>{
                    sortProducts(sortDetails[e.target.value])
                }}>
                    <option value="DEFAULT" disabled>-- sort by --</option>
                    {sortDetails.map((option, index)=>(<option key={index} value={index}>{option.option}</option>))}
                </select>
            </div>
        </div>
    )
}

export default Sorting


