import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth,provider} from "../../firebase";

const Login = () => {

    const signIn = (e)=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
    return (
        <div className="login">
           <div className="login__telegram">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/480px-Telegram_Messenger.png" alt="Telegram__icon"/>
               <h1>Telegram</h1>
           </div>
           <Button onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;