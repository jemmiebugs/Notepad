import React, {useState} from 'react'
import Login from './login.js';
import './style.css';
import book from '../images/book.png';
import DevNote from '../images/DevNote.svg';
import Logo from '../images/logo.png';

const SignUp =()=>{
    const [formData, setformData] = useState()

    const onChangeHandler =(e)=>{
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onRegisterHandler =()=> {
        if(formData === undefined){
            alert("Please enter Email address to sign up!")
        }else{
            sessionStorage.setItem("user", JSON.stringify([formData]))
        }
    }
    return(
        <div className="SignUp">
            <header>
                <nav className="SignUp-nav">
                    <div className="SignUp-logo-icon"><img src={book} alt="" /></div>
                    <div className="SignUp-logo-icon-txt"><img src={DevNote} alt="" /></div>
                </nav>
            </header>
            <section>
                <div className="SignUp-logo-div">
                </div>
                <div className="SignUp-cover-icon">
                    <img src={Logo} alt="" />
                </div>
                <h2 className="SignUp-text">Sign up</h2>
                <form onSubmit={onRegisterHandler}>
                    <input type="email" className="SignUp-email-input" placeholder="Email address" name="email" onChange={onChangeHandler} /><br/>
                    <input type="password" className="SignUp-password-input" name="password" placeholder="Password" onChange={onChangeHandler} /> <br/>
                    <button type="submit" className="SignUp-button">Sign up</button>
                    <p className="SignUp-login">Registered? <a className="SignUp-login" href={<Login/>}>Login here</a></p>
                </form>
            </section>

        </div>
    )
}

export default SignUp;