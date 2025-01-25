import bgImg from "../../assets/images/rhythmic-logo.png"
import dImg from "../../assets/images/login-image.png"
import "../../styles/auth-styles.css"
import { Navigate, NavLink } from "react-router-dom";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassWord, doSignInWithGoogle } from "../../utils/auth_function";
import { useAuth } from "../../context/authContext/firebaseContext";

function LogInPage() {

  const { userLoggedIn } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false)

  const onSubmit = async (e) => {
     console.log("button clicked");
     if(!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassWord(email, password);
     }
  }

  const onGoogleSignIn = async (e) => {
     console.log('google clicked');
     return doSignInWithGoogle();
  }

  return (
    <>
      {userLoggedIn && (<Navigate to={"/"} replace={true} />)}
      <div>
        <header className="header">
          <img className="logo" src={bgImg} width="170px" height="70px" alt="" />
        </header>

        <main>
          <div className="auth-container">
            <div className="auth-main">
              <h3 className="auth-title">LogIn to Rhytnmic</h3>
              <div className="form">
                <div>
                  <label htmlFor="email">Email: </label>
                  <input type="email" onChange={e => setEmail(e.target.value)} id="email" placeholder="Enter Email" name="user_email" />
                </div>
                <div>
                  <label htmlFor="pass">Password: </label>
                  <input type="password" onChange={e => setPassword(e.target.value)} id="pass" placeholder="Enter Password" name="user_pass" />
                </div>
                <div>
                  <button className="auth-button" type="button" onClick={onSubmit}>LogIn</button>
                </div>
              </div>

              <div className="separator">OR</div>
              <div className="auth-social">
                <button type="button" className="googleIcon" onClick={onGoogleSignIn}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="4rem" height="4rem" viewBox="0 0 48 48">
                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  </svg>
                </button>
                <button type="button" className="facebookIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="4rem" height="4rem" viewBox="0 0 48 48">
                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                  </svg>
                </button>
              </div>
              <div className="auth-text">
                <p>Don't have an account <a href="#">SignUp</a></p>
              </div>
            </div>
            
            <div className="auth-img">
              <img src={dImg} alt="Dispaly image" />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default LogInPage;