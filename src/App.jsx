import reactLogo from '/react.svg'
import firebase from '/firebase.png'
import './App.css'
import Login from './components/Login'

function App() {

  return (
    <>
      <div className='container'>
        <div>
          <a href="https://firebase.com/" target="_blank">
            <img src={firebase} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Login />
      </div>
    </>
  )
}

export default App
