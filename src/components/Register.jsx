import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import '../App.css'
import '../styles/login.css'


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowRegister, setIsShowRegister] = useState(true);

  const handleRegisterClick = () => {
    setIsShowRegister((isShowRegister) => !isShowRegister);
  };

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      alert('LogIn successful!');
    } catch (error) {
      const errorMessage = error.message
      console.log('errorMessage :', errorMessage)
      alert('LogIn failed: ' + error.message);
    }
  }

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!');
      handleRegisterClick()
      setEmail('')
      setPassword('')
    } catch (error) {
      const errorMessage = error.message
      console.log('errorMessage :', errorMessage)
      alert('Registration failed: ' + error.message);
      setEmail('')
      setPassword('')
    }
  };

  return (
    <div >
      <div className="login-form">
        <div className="form-box solid">
            <div className='container'>
                <h1 className="login-text">{isShowRegister?"Sign Up":"Sign In"}</h1>
                <label className="inp">Email:</label>
                <input className="inp" placeholder='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="inp">Password:</label>
                <input className="inp" placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='butt' onClick={isShowRegister? handleRegister : handleLogin}>{isShowRegister?"SIGNUP":"SIGNIN"}</button>
                <div className='textalignright'>
                    <label className="switchform" onClick={handleRegisterClick}>{isShowRegister?"Sign In":"Sign Up"}</label>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
