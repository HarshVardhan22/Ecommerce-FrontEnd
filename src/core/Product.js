import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read } from './apiCore';
import Card from './Card';

const Product = props => {
    const [product, setProduct] = useState({});
    // const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                // listRelated(data._id).then(data => {
                //     if (data.error) {
                //         setError(data.error);
                //     } else {
                //         setRelatedProduct(data);
                //     }
                // });
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    return (
        <div
           
            className="container-fluid"
        >
            <div className="row">
                <div className="col-8">
                    {product && product.description && <Card product={product} showViewProductButton={false} />}
                </div>

               
            </div>
        </div>
    );
};

export default Product;
