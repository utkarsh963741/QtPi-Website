import React from 'react'
import'./HomeProjects.css'
import VideoPlayer from './VideoPlayer'

const HomeProjects = () => {
    return (
        <div className="home__projects">
            <div className="contents">
                <h1 className="title">PROJECTS MADE BY STUDENTS USING OUR ROBOTICS KIT</h1>
                <div className="photo-grid">
                    <div className="card">
                        <VideoPlayer video='./videos/5.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    <div className="card">
                        <VideoPlayer video='./videos/2.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    <div className="card ">
                        <VideoPlayer video='./videos/1.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    <div className="card card-tall card-wide">
                        <VideoPlayer video='./videos/3.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    <div className="card card-wide">
                        <VideoPlayer video='./videos/4.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    <div className="card card">
                        <VideoPlayer video='./videos/10.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    
                    <div className="card card-wide2">
                        <VideoPlayer video='./videos/6.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    <div className="card card">
                        <VideoPlayer video='./videos/7.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    <div className="card card">
                        <VideoPlayer video='./videos/8.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    <div className="card card">
                        <VideoPlayer video='./videos/9.mp4' sizeX='100%' sizeY='100%'>
                            <i className="fas fa-play-circle" style={{fontSize:"60px"}}></i>
                        </VideoPlayer>
                    </div>
                    
                    
                    
                </div>
            </div>
            
        </div>
    )
}

export default HomeProjects
