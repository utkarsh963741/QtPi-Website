import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css';
import Button from './Button'

const Navbar = () => {
    const [click, setclick] = useState(false);
    const [button, setbutton] = useState(true)

    const handleClick = () => setclick(!click);
    const closeMenu = () => setclick(false);

    const showButton = () => {
        if(window.innerWidth <= 960)
            setbutton(false)
        else
            setbutton(true)
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMenu}>
                        <img src="/images/logo.png" className="logo" alt="" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMenu}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMenu}>PRODUCTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className='nav-links' onClick={closeMenu}>BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className='nav-links-mobile' onClick={closeMenu}>LOGIN</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' link='/login'>LOGIN</Button>}
                    <a href='https://pages.razorpay.com/pl_FyO6Ft4BE4FF2X/view' target='blank' className='cart-icon-container' onClick={closeMenu}>
                        <i className="fas fa-cart-arrow-down cart-icon"></i></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar

