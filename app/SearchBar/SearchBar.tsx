import { useState, useEffect } from "react"
import "./SearchBar.css"

export default function SearchBar(){
    const [filterProducts, setFilterProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])
    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes})
            const currentFilter = products.map((product, index) => {
                return (<div className="prodStyle">
                    <p style={{fontSize:".5rem"}}>{product.title}</p>
                    <p>{product.price}</p>
                    <img style={{width:"100px"}} src={product.image} alt={product.title} />
                </div>)
            })
            setFilterProducts(currentFilter)
        })
    }

    return <div>
        <input type="text" value={searchString} />
        <div style={{display:"flex", flexFlow:"row wrap"}}>{filterProducts}</div>
    </div>
}