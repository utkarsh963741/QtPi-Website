import React from 'react'
import './ProductCard.css'

function ProductCard(props) {
    return (
        <>
            <li className="product-cards__item">
                <div className="product-card">
                    <div className="badge" style={{display:props.badge?'':'none'}}>{props.badge}</div>
                    <div className="product-tumb" data-category={props.label}>
                        <img src={props.src} alt=""></img>
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">{props.category}</span>
                        <h4><a href="/products">{props.title}</a></h4>
                        <p>{props.detail}</p>
                        <div className="product-bottom-details" style={{display:props.price?'':'none'}}>
                            <div className="product-price"><small>{props.priceOld}</small>{props.price}</div>
                            <div className="product-links" >
                                <i className="fa fa-heart"></i>
                                <a href={props.path} target='blank'><i className="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ProductCard
