import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'
import '../styles/login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          const user = userCredential.user
          alert('LogIn successful!');
        } catch (error) {
          const errorCode = error.code
          const errorMessage = error.message
          console.log('errorMessage :', errorMessage)
          alert('LogIn failed: ' + error.message);
        }
      }

  return (
    <div className='container'>
      <label className="inp">Email:</label>
      <input className="inp" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label className="inp">Password:</label>
      <input className="inp" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button className='butt' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login