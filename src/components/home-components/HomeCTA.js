import React from 'react'
import './HomeCTA.css'
import Button from '../Button'

const HomeCTA = () => {
    return (
        <div className='home__cta'>
            <div className="container">
                <div className="content">
                    <p style={{color:'var(--first-color)'}}> Get started</p>
                    <h2 className="title">
                        Its Never Too Early or Too
                        Late to Get Started
                    </h2>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sunt quaerat assumenda temporibus voluptatibus, sint illo ratione labore iste ducimus. Debitis saepe quidem
                    </p>
                    <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--medium" link='/products'>
                        Buy your Kit Now <i className="fal fa-arrow-right"></i>
                    </Button>
                </div>
                <div className="image-container">
                    <img src="./images/clip2.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HomeCTA
