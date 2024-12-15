import React,{useState} from 'react'
import './Auth.css'
import axios from 'axios'
import NavBar from '../Home/NavBar';
import { useNavigate } from 'react-router-dom';
const Register = () => {
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
          'https://booksearch-p2fm.onrender.com/api/Auth/register',
          // 'https://localhost:7192/api/Auth/register',
          { UserName: name, Password: password },
          {
            headers: {
              'Content-Type': 'application/json', // Ensure content type is set to JSON
            },
          }
        );
        console.log('Registered Successful:', response.data);
          alert("Registered Successfully, You will be redirected to login in 3 seconds");

        navigate('/login')

    } catch (error) {
        setError(error.response?.data?.message)
    }

  }

  return (
    <div>

  <NavBar />
    <div className='boxAuth'>
  <h1>Please provide details below to Register your account</h1>
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

export default Register;
