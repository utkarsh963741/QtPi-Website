import React from 'react'
import './HomeDetails.css'
import VideoPlayer from './VideoPlayer'
import Button from '../Button'

const HomeDetails = () => {
    return (
        <div className='home__details'>
            <div className="details">
                <div className="content">
                    <h2 className="title">
                        Join the Robotics Revolution
                    </h2>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sunt quaerat assumenda temporibus voluptatibus, sint illo ratione labore iste ducimus. Debitis saepe quidem, laboriosam cum expedita labore molestias voluptatibus possimus.
                    </p>
                    <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--medium" link='/blog'>
                        Know More <i className="fal fa-arrow-right"></i>
                    </Button>
                </div>
                
                <VideoPlayer video='./videos/trailer.mp4' sizeX='90%' sizeY='310px'>
                    <i className="fas fa-play-circle" style={{'fontSize':"100px"}}></i>
                </VideoPlayer>
            </div>
        </div>
    )
}

export default HomeDetails
