import React from 'react';
import {Link} from "react-router-dom";


const ProductCard = ({product}) => {


    return (
        <>
            <div className={"col-4"}>

                <div className="card border-primary mb-3 flex-fill card-header-app" >
                    <div className="card-header">{product.title.substr(0, 30)}... - {product.id}</div>
                    <div className="card-body">

                        <p className="card-text">
                            {product.content.substr(0, 200) } ...
                        </p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/products/${product.id}`} className="btn btn-block btn-outline-dark">Detail</Link>
                    </div>
                </div>
            </div>
        </>
    );
};



export default ProductCard;
