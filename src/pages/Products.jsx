import {  useEffect, useState } from "react";
import Product from "../components/Product"
import { useFetch } from "use-http";


const Products = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [products, setProducts] = useState([])

    const { get, response } = useFetch("https://fakestoreapi.com")

    const getData = async () => {
        await get('/products')
        if (response.ok) {
            setProducts(response.data)
        } else {
            setProducts([])
        }
    }

    useEffect(() => {
        getData();
    }, [])



    useEffect(() => {
        setFilteredData(products)
    }, [products])

    const searchHandler = (e) => {
        let data = products.filter(p => p.title.toLowerCase().includes(e.target.value))
        setFilteredData(data)
    }


    return (
        <div className="container " value={{products}}>
            <input class=" py-1 mx-2" type="text" placeholder=" search..." onChange={searchHandler} />
            <button class="btn btn-outline-primary" type="submit">Search</button>
            <div className="row">
                {filteredData.map(product => <Product key={product.id} {...product} />)}
            </div>
        </div>
    );
}

export default Products;