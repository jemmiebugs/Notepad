import React, {useState} from 'react'
import './style.css';
import book from '../images/book.png';
import DevNote from '../images/DevNote.svg';
import Logo from '../images/logo.png';

const Login =()=>{
    const [formData, setformData] = useState()

    const onChangeHandler =(e)=>{
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onRegisterHandler =()=> {
        if(formData === undefined){
            alert("Please enter Email address to Login!")
        }else{
            sessionStorage.setItem("user", JSON.stringify([formData]))
        }
    }
    return(
        <div className="Login">
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

        </section>


        </div>
    )
}

export default Login;

