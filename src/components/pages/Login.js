import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import './Login.css'

export default function Login()
{
    const [container, setcontainer] = useState(false);
    const [containermobile, setcontainermobile] = useState(true);
    const containerToogle = () => setcontainer(!container);
    const containerMobileToogle = () => setcontainermobile(!containermobile);

    return (
        <> 
        <div className="login">
            <Link to='/' className='login-logo-container'>
                <img src="./images/logo.png" className="login-logo" alt="" />
            </Link>
            <div className={container? "container right-panel-active" : "container "} id="container">
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 className="login-h1">Log in</h1>
                        <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="/">Forgot your password?</a>
                        <Link to="/">
                            <button>Log In</button>
                        </Link>
                    </form>
                </div>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className="login-h1">Create Account</h1>
                        <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <Link to="/">
                            <button>SIGN UP</button>
                        </Link>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="login-h1">Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={containerToogle} className="ghost" id="signIn">Log In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="login-h1">Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={containerToogle} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-mobile">
                <div className={containermobile? "form-container" : " form-container-none"} >
                    <form action="#">
                        <h1>Log in</h1>
                        <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="/">Forgot your password?</a>
                        <Link to="/">
                            <button>Log In</button>
                        </Link>
                        <button className="outline" onClick={containerMobileToogle}>Sign In</button>
                    </form>
                </div>
                <div className={containermobile? "form-container-none" : " form-container"}>
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <Link to="/">
                            <button>Sign up</button>
                        </Link>
                        <button className="outline" onClick={containerMobileToogle}>Log In</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}