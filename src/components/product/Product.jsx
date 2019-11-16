import React from 'react';
import {Link} from "react-router-dom";

const Product = ({product}) => {
    return (
        <>
            <div className="card border-primary mb-3">
                <div className="card-header">
                    {product.title}
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        Published at : {product.createdAtAgo}
                    </h4>
                    <p className="card-text">
                        {product.content}
                    </p>
                </div>
                <div className="card-footer">
                    <button className="btn-block btn btn-outline-success">Edit</button>
                    <button className="btn-block btn btn-outline-danger">Delete</button>
                </div>
            </div>
            <div className="ml-auto">
                <Link to="/products" className="btn-block btn btn-outline-info">Retour</Link>
            </div>
        </>
    );
};

export default Product;
