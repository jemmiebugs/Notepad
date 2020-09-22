import React, {useState, useEffect} from 'react';
import './App.css';
import Login from "./components/main/login";
import SignUp from "./components/main/signup";
import LocalStorage from "./components/noteApp/localStorage.js";

function App() {
    const [appState, setAppState] = useState({
        isRegistered: false
    })
    useEffect(() => {
        const localUser = JSON.parse(sessionStorage.getItem("user"))
        if(localUser !== null) {
            setAppState(
                {
                    isRegistered: true
                }
            )
        }
        else{
        }
        console.log(localUser)
        console.log("localUser:",localUser)
        // sessionStorage.removeItem("user")
        sessionStorage.removeItem("user")
    }, [appState])

    const handleClick = () => {
        setAppState({...appState, isRegistered: !appState.isRegistered})
    }


    return (
        <div className="App">
            {!appState.isRegistered?<SignUp handleSignInClick={handleClick}/>:<Login handleSignUpClick={handleClick}/>}

            {/*{appState.isRegistered?:null}}*/}
             {/*<SearchApp/>*/}
            {<LocalStorage/>}
        </div>
    );
}
export default App;