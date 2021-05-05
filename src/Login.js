import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import DaylightLogo from './img/daylight.png';
import {auth, provider} from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';


function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        
        // The signed-in user info.
        const googleDisplayName = result.user.displayName;
               
    }).catch((error) => {
        // Handle Errors here.
        alert(error.code  + ': ' +  error.message);
    });
    
    }
    return (
        
        <div className="login"> 
            <div className="login_container">
                <div className="logo" >
                    <img src={DaylightLogo} ></img>
                </div>
                
                <h1 class="heading text-center">Login</h1>
            
                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div> 

        </div>
        
    );
}

export default Login;
export {auth, provider};
