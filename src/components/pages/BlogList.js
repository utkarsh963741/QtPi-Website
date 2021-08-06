import React from 'react'
import CardItem from '../CardItem'
import '../CardItem.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './BlogList.css'

const BlogList = () => {
    return (
        <div className='blog__list'>
            <Navbar/>
            <div className="cards">
                <h1>LATEST BLOGS</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className='cards__items'>
                        <CardItem
                            src='images/blog-3.png'
                            text='Future Education Industry: Tech Savvy Teacher I With Dr. Anil Kumar. T'
                            label='Santosh Avvannavar'
                            path='https://blog.qtlearn.in/future-education-industry-tech-savvy-teacher-i-with-dr-anil-kumar-t/'
                            id='jk53'
                            />
                            <CardItem
                            src='images/blog-4.png'
                            text='Why is the Genie Platform referred to as the Coders Community?'
                            label='Vladimir Nabokov'
                            path='https://blog.qtlearn.in/why-is-the-genie-platform-referred-to-as-the-coders-community/'
                            id='gdd8'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/blog-1.png'
                            text='Design Thinking in Classroom'
                            label='Yuval Noah Harari'
                            path='https://blog.qtlearn.in/tag/design-thinking-in-classroom/'
                            id='x987'
                            />
                            <CardItem
                            src='images/blog-2.png'
                            text="There's time for everything: Technology for kids"
                            label='Santosh Avvannavar'
                            path='https://blog.qtlearn.in/theres-time-for-everything-technology-for-kids/'
                            id='wqe8'
                            />
                            
                            <CardItem
                            src='images/blog-5.jpeg'
                            text='The Negative Part of Kids Coding | TEDxVCE'
                            label='Santosh Avvannavar'
                            path='https://blog.qtlearn.in/the-negative-part-of-kids-coding-tedxvce/'
                            id='f34a'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/blog-6.jpeg'
                            text='A Machine Learning Session with 32nd Student Ambassador'
                            label='Haruki Murakami'
                            path='https://blog.qtlearn.in/a-machine-learning-session-with-32nd-student-ambassador/'
                            id='jk53'
                            />
                            <CardItem
                            src='images/blog-7.png'
                            text='Family Bonding Time with Coding and Robotics'
                            label='William Shakespeare'
                            path='https://blog.qtlearn.in/family-bonding-time-with-coding-robotics-i-in-conversation-mother-daughters/'
                            id='gdd8'
                            />
                            <CardItem
                            src='images/blog-8.png'
                            text='Knowing or Learning: What classroom asks for?'
                            label='Anne Frank'
                            path='https://blog.qtlearn.in/knowing-or-learning-what-classroom-asks-for/'
                            id='f34a'
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BlogList
