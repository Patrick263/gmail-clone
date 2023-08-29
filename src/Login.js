import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import "./Login.css";

function Login() {
    const dispatch = useDispatch();
    const signIn = () =>{
auth.signInWithPopup(provider).then((result) =>{
    dispatch(login({
        displayName: result.user.displayName,
        email: result.user.email,
        photoUrl: result.user.photoURL,
      })
      );
})
.catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src="data:image/png;base64,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" alt=""/>
        </div>
        <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login
