import React from 'react'
import '../../App.css'
import './Products.css'
import Navbar from '../Navbar'
import ProductCard from '../ProductCard'
import Footer from '../Footer'

export default function Products()
{
    return (
        <>
            <Navbar/>
            <div className="product__page-cards">
                <h1>CHECK OUT OUR PRODUCTS</h1>
                <div className="product__page-cards__container">
                    <div className="product__page-cards__wrapper">
                        <ul className='product__page-cards__items'>
                            <ProductCard
                            badge='Hot'
                            label='Kit + Course'
                            src='images/img-1.jpg'
                            category='Robotics'
                            title='QtPi Robotics Kit + Course'
                            detail='Robotics Kit which contains building blocks (Q-bits), Electronics (Motherboard, Sensors, etc) & 25 Live Coach Sessions'
                            priceOld='₹30,000'
                            price='₹24,000'
                            path='https://pages.razorpay.com/pl_FyO6Ft4BE4FF2X/view'
                            />
                            <ProductCard
                            badge='Diwali Sale'
                            label='Robotics Kit'
                            src='images/img-2.jpg'
                            category='Robotics'
                            title='QtPi Robotics Kit'
                            detail='Robotics Kit which contains building blocks (Q-bits), Electronics (Motherboard, Plug & Play Sensors/actuators)'
                            priceOld='₹20,000'
                            price='₹10,000'
                            path='https://pages.razorpay.com/pl_FyO6Ft4BE4FF2X/view'
                            />
                            <ProductCard
                            badge='Hot'
                            label='Course'
                            src='images/img-4.jpg'
                            category='Coding'
                            title='QtLearn Coding Classes'
                            detail='50 Hours of coding course content. 150+ Hours of engagement. Doubt clarifying live sessions by experts. Access to All programming tools. '
                            priceOld='₹20,000'
                            price='₹10,000'
                            path='https://pages.razorpay.com/pl_GE7uqi0RD389YL/view'
                            />
                        </ul>

                        <ul className='product__page-cards__items'>
                            <ProductCard
                            badge=''
                            label='Course'
                            src='images/img-3.jpeg'
                            category='Coding'
                            title='QtLearn Python Classes'
                            detail='The course includes 4 Live Coach Sessions. Each session is of 1 hour duration.'
                            priceOld='₹1,400'
                            price='₹1,000'
                            />
                            <ProductCard
                            badge=''
                            label='Robotics Kit'
                            src='images/img-5.jpg'
                            category='Robotics'
                            title='QtPi Beginners Kit'
                            detail='Robotics Kit which contains building blocks (Q-bits), Electronics (Motherboard, Sensors)'
                            priceOld='₹20,000'
                            price='₹10,000'
                            />
                            <ProductCard
                            badge='Sale-50%'
                            label='Robotics Kit'
                            src='images/img-6.jpeg'
                            category='Robotics'
                            title='QtPi Advanced Kit'
                            detail='Robotics Kit which contains building blocks (Q-bits), Electronics (Motherboard, Plug & Play Sensors/actuators)'
                            priceOld='₹20,000'
                            price='₹10,000'
                            />
                        </ul>
                        
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}