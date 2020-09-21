import React, {useState} from 'react'
import './style.css';
import book from '../images/book.png';
import DevNote from '../images/DevNote.svg';
import Logo from '../images/logo.png';
// import SignUp from 'signup.js'


const Login =({ handleSignUpClick })=>{
        const [formData, setformData] = useState()
        // const [signup, showSignUp] = useState(false)

    const onChangeHandler =(e)=>{
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className="Login">
            {console.log(formData)}
            <header>
                <nav className="Login-nav">
                    <div className="Login-logo-icon"><img src={book} alt="" /></div>
                    <div className="Login-logo-icon-txt"><img src={DevNote} alt="" /></div>
                </nav>
            </header>
            <section>
                <div className="Login-logo-div">
                </div>
                <div className="Login-cover-icon">
                    <img src={Logo} alt="" />
                </div>
                <h2 className="Login-text">Login</h2>
                <form>
                    <input type="email" className="Login-email-input" placeholder="Email address" name="email" onChange={onChangeHandler} /><br/>
                    <input type="password" className="Login-password-input" name="password" placeholder="Password" onChange={onChangeHandler} /> <br/>
                    <button type="" className="Login-button">Login</button>
                    <p className="SignUp-login" onClick={handleSignUpClick}>Not registered? SignUp here</p>
                </form>
            </section>
            <footer>

            </footer>

        </div>
    )

}

export default Login;

