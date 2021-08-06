import React from 'react'
import Button from '../Button'
import './VideoSection.css'
import Modal from '../Modal'

const BGARRAY = ['slide1.jpg', 'slide2.jpg' , 'slide3.jpg' , 'slide4.jpg'];


const VideoSection = () => {
    const [value, setValue] = React.useState(0);
    
    React.useEffect(() => {
        setInterval(() => {
            setValue((v) => (v === 3 ? 0 : v + 1));
        }, 5000);
    }, []);
    

    const [modalState , setModalState] = React.useState(false);
    const modalOpen = () => {
    setModalState( true );
    }
    const modalClose = () => {
    setModalState( false);
    document.getElementById("vid").pause()
    }

    return (
        <div className="video-container" >
            {/* <video className="vid" src="/videos/video-1.mp4" autoPlay loop muted></video> */}
            <div  className="bgImg"><img src={'/images/'+BGARRAY[value]} alt=""/></div>
            <h1>ONE KIT,<br/> <span className="styleh1">UNLIMITED</span>  POSSIBILITIES</h1>
            <p>We use <span className="pbold">research, stratergy</span> and <span className="pbold">design</span> to <span className="pbold">create</span> <br/> <span className="pcolor">engaging learning experience</span></p>
            <div className="video-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" link="/products">
                    BUY NOW <i className="fal fa-arrow-right"></i>
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" link='#' onClick={modalOpen}>
                    WATCH TRAILER <i className="fas fa-play-circle"></i>
                </Button>
            </div>
            <Modal show={modalState} handleClose={modalClose}>
                <video id='vid' src="./videos/trailer.mp4" style={{width:'75%'}} controls></video>
            </Modal>
        </div>
    )
}

export default VideoSection
