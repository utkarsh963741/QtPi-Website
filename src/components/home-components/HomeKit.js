import React from 'react'
import './HomeKit.css'
import VideoPlayer from './VideoPlayer'

const HomeKit = () => {
    return (
        <div className='home__kit'>
             <div className="container">
                 <div className="detail-1">
                    <div className='feature'>
                        <i className="feature-icon fal fa-child"></i>
                        <h3 className="feature-title">Easy to Use</h3>
                        <p className="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='feature'>
                        <i className="feature-icon fal fa-award"></i>
                        <h3 className="feature-title">Govt. recognised</h3>
                        <p className="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                 </div>
                 <div className="image-container">
                    <VideoPlayer video='./videos/kit.mp4' sizeX='100%' sizeY='100%'>
                        <i className="fas fa-play-circle" style={{fontSize:"70px"}}></i>
                    </VideoPlayer>
                 </div>
                 <div className="detail-2">
                    <div className='feature'>
                        <i className="feature-icon fal fa-graduation-cap"></i>
                        <h3 className="feature-title">Fun + Learning</h3>
                        <p className="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='feature'>
                        <i className="feature-icon fal fa-user-headset"></i>
                        <h3 className="feature-title">24x7 customer support</h3>
                        <p className="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                 </div>
             </div>
            
        </div>
    )
}

export default HomeKit
