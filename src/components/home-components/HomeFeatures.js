import React from 'react'
import './HomeFeatures.css'

const HomeFeatures = () => {
    return (
        <div className='home__features'>
            <div className='feature'>
                <i className="feature-icon fal fa-code"></i>
                <h3 className="feature-title">Write Code</h3>
                <p className="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum et fugiat accusantium </p>
            </div>
            <div className='feature'>
                <i className="feature-icon fal fa-robot"></i>
                <h3 className="feature-title">Learn Robotics</h3>
                <p className="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum et fugiat accusantium </p>
            </div>
            <div className='feature'>
                <i className="feature-icon fal fa-book-reader"></i>
                <h3 className="feature-title">Enjoy Learning</h3>
                <p className="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum et fugiat accusantium </p>
            </div>
        </div>
    )
}

export default HomeFeatures
