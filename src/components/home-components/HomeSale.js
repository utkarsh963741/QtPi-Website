import React from 'react'
import './HomeSale.css'
import Button from '../Button'

const HomeSale = () => {
    return (
        <div className='home__sale'>
            <div className="container">
                <div className="content">
                    <p style={{color:'var(--first-color-lighter)'}}> Robotics Kit </p>
                    <h2 className="title">
                        Big Sale <span style={{color:'var(--first-color-lighter)'}}>- 20%</span> for QtPi Robotics Kit
                    </h2>
                    <p className="desc">
                        perfect gift for your kids this Diwali
                    </p>
                    <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--medium" link='/products'>
                        Buy Now <i className="fal fa-arrow-right"></i>
                    </Button>
                </div>
                <div className="image-container">
                    <img src="./images/clip1.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HomeSale
