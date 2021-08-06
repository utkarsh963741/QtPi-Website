import React from 'react'
import './VideoPlayer.css'

const VideoPlayer = (props) => {
    return (
        <>
        <div className="vid-container" style={{width:props.sizeX , height:props.sizeY}}>
            <video id="vid" src={props.video} loop 
                    onMouseOver={e=>e.target.play()} 
                    onMouseOut={e=>e.target.pause()}
                    onTouchStart={e=>e.target.play()}
                    onTouchEnd={e=>e.target.play()}>
            </video>
            <div className="playBtn-container">
                {props.children}
            </div>
        </div>
        </>
    )
}

export default VideoPlayer
