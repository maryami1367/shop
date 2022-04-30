import { useParams } from "react-router";
import { useState } from 'react';
import { useEffect } from 'react';
import { useFetch } from 'use-http';
import { Link } from "react-router-dom";


const Details = () => {

    const { id } = useParams()

    const [detail, setDetail] = useState()


    const { get, response } = useFetch("https://fakestoreapi.com")

    const handleGetDetail = async () => {
        await get(`/products/${id}`)
        if (response.ok) {
            setDetail(response.data)
        }
    }

    useEffect(() => {
        handleGetDetail()
    }, [])

    return (
        
        <div className=" h-100% m-4 p-5 container d-flex justify-content-between ">
            <div className="m-3 p-2">
            <img src={detail?.image} alt="product" style={{width:"300px" , height:"auto"}}/>
            </div>
           <div className="m-3 p-2 " >
           <p><span >category:</span>{detail?.category}</p>
            <p>{detail?.title}</p>
            <p>{detail?.description}</p>
            <p>{detail?.price}$</p>
            <Link to="/product" className="text-decoration-none">Back to shop</Link>
            </div>
        </div>
    
    );
}

export default Details;