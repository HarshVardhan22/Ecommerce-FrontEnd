import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({product}) => {
    return (
        <div className="col-4 mb-3">
            <div className="card">
            
            <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
            <Link to="/">
                <button>View Product</button>
            </Link>
            <Link to="/">
                <button>Add to Cart </button>
            </Link>
            </div>

        </div>
    )
}

export default Card
