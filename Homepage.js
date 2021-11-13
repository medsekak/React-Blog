import React from 'react';
import './Home.css'
import GoogleLogin from "react-google-login"
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';
function Homepage() {
    const dispatch=useDispatch();
    const login =(response)=>{
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj))
    }
    const isSignedIn=useSelector(selectSignedIn);
  return (
        <div className="home__page" style={{display:isSignedIn?"none":""}}>
          {!isSignedIn ? (<div className="login__message">
            <h2>📗</h2>
                <h1>A Readers favourite place!</h1>
                <p>
                    we provide high quality online resource for reading 
                </p>
                <GoogleLogin
                  clientId="572805351059-4rl2aju1b6s7rno1tue9t48rgfc7pvls.apps.googleusercontent.com"
                  render={(renderProps)=>(
                  <button 

                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="login__button"
                  >
                      Login with Google
                  </button>
                  )}
                  onSuccess={login}
                  onFailure={login}
                  isSignedIn={true}
                  cookiePolicy={"single_host_origin"}
                />
            </div>):("")}
        </div>
  );
}

export default Homepage;
