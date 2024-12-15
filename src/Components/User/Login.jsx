import React,{useState} from 'react'
import './Auth.css'
import axios from 'axios'
import NavBar from '../Home/NavBar';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const handleSubmit=async(e)=>{
    try {
        e.preventDefault()
        console.log(name)
        console.log(password)
        if(!name||!password){
            setError("Both fields are required")
        }
        const response = await axios.post(
          'https://booksearch-p2fm.onrender.com/api/Auth/login',
          // 'https://localhost:7192/api/Auth/login',

          { UserName: name, Password: password },
          {
            headers: {
              'Content-Type': 'application/json', // Ensure content type is set to JSON
            },
          }
        );        console.log('Login Successful:', response.data);

        const token = response.data
        localStorage.setItem('authToken',token)
        navigate('/')

    } catch (error) {
        setError(error.response?.data)
        console.log(error.response.data)
    }

  }

  return (
    <div>

  <NavBar />
    <div className='boxAuth'>

      <h1>*************Enter Your Login Details!!*************</h1>
      <div></div>
      <form onSubmit={handleSubmit} className='authForm'>
        <div className='inputUser'>
          <label>Your Username</label>
          <input onChange={(e)=>{setName(e.target.value)}} type='text' name='name' value={name} required>
          </input>
        </div>
        <div className='inputUser'>
          <label>Your Password</label>
          <input onChange={(e)=>{setPassword(e.target.value)}} type='password' name='password' value={password} required>
          </input>
        </div>
        <div className='inputButton inputUser'>
          <button className="userButton">Submit</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
    </div>

  )
}

export default Login;