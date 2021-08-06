import React from 'react'
import "../../App.css"
import Navbar from '../Navbar'
import VideoSection from '../home-components/VideoSection'
import HomeFeatures from '../home-components/HomeFeatures'
import HomeKit from '../home-components/HomeKit'
import HomeDetails from '../home-components/HomeDetails'
import HomeProjects from '../home-components/HomeProjects'
import HomeCTA from '../home-components/HomeCTA'
import HomeSale from '../home-components/HomeSale'
import Footer from '../Footer'

const Home = () => {
    return(
        <>
            <Navbar className="sticky"/>
            <VideoSection/>
            <HomeFeatures/>
            <HomeKit/>
            <HomeDetails/>
            <HomeProjects/>
            <HomeCTA/>
            <HomeSale/>
            <a className='home-map' href='https://www.google.com/maps/place/QtPi+Robotics/@12.8403893,77.6518959,15z/data=!4m2!3m1!1s0x0:0xf47e76ab90d96d6?sa=X&ved=2ahUKEwjpm5iF0pvyAhXnILcAHSaJCBcQ_BIwHXoECFYQBQ' target='blank'>
                <img className='home-map-image' alt='' src="./images/map.png" />
            </a>
            <br/><br/>
            <Footer/>
        </>
    )
    
}

export default Home