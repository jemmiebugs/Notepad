import React, {useState, useEffect} from 'react';
import './App.css';
import Login from "./components/main/login";
import SignUp from "./components/main/signup";

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


    return (
        <div className="App">
            {!appState.isRegistered?<SignUp/>:null}
            {appState.isRegistered?<Login/>:null}}
             {/*<SearchApp/>*/}
        </div>
    );
}
export default App;