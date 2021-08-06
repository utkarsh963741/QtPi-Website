import React from 'react'
import '../../App.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Blog(props)
{
    return(
        <>
            <Navbar/>
            <div>
                {props.match.params.id}
            </div>
            <Footer/>
        </>
    )
}