import React from 'react'
import'./HomeBlog.css'
import ProductCard from '../ProductCard'

const HomeBlog = () => {
    return (
        <div className="home__blog">
            <div className="contents">
                <h1 className="title">Blog</h1>
            </div>
            <div className="card-wrapper">
            <ul className='cards__items'>
                        <ProductCard
                        badge='new'
                        label='Blog'
                        src='images/img-home.jpg'
                        category='AI/ML'
                        title='Machine Learning'
                        detail='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        />
                        <ProductCard
                        label='Blog'
                        src='images/img-9.jpg'
                        category='AI/ML'
                        title='Machine Learning'
                        detail='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        />
                        <ProductCard
                        label='Blog'
                        src='images/img-8.jpg'
                        category='AI/ML'
                        title='Machine Learning'
                        detail='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        />
                    </ul>
            </div>
        </div>
    )
}

export default HomeBlog
