
import { useContext, useState } from "react";
import { Maincontext } from "../provider/Provider";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ image, title, price, id }) => {

    const { factor, setFactor } = useContext(Maincontext)


    const handleAddToCard = () => {
        let copy = [...factor]
        let product = copy.find(p => p.productId == id)
        if (product) {
            product.count++
        } else {
            copy.push({ productId: id, count: 1, title, price })
        }
        setFactor(copy)
    }

    return (
        <div className="col-xs-12 col-md-6 col-lg-3 ">
            <div className="card text-center rounded m-3 shadow-lg product-card" >
                <div className="d-flex align-items-center img-container">
                    <img src={image} alt="product" className="card-img-top p-5" />
                </div>
                <div className="card-body">
                    <div style={{ height: "50px" }}>
                        <h5 className="card-title">{title.length > 20 ? `${title.substring(0, 20)}...` : title} </h5>
                    </div>
                    <p className="card-text"> ${price}</p>
                    <div>
                        <Link to={`/product/${id}`} className="card-link text-decoration-none">Detail</Link>
                        <button className="btn btn-primary card-img-bottom mt-3" onClick={handleAddToCard}>add to card</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Product;