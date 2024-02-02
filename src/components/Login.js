import React, { useState} from 'react'
import {useNavigate } from 'react-router-dom'
import backgroundImage from './loginbg.jpg';
export const Login = (props) => {
    const [credentials,setCredentials]=useState({email :" ",password:""})
    let navigate = useNavigate();

    const backgroundStyle = {
        width: '100%',
        height: '100%',
        position: 'relative',
        background: `url(${backgroundImage}) center/cover no-repeat`, // Set background image
        borderRadius: 20,
        overflow: 'hidden',
      };
      const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              
            },
            body: JSON.stringify({email: credentials.email,password :credentials.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //save token and redirect
            localStorage.setItem('token' ,json.token);
            navigate('/');
            props.showAlert("Logged-in Successfully","success")
          }
          else{
            props.showAlert("Invalid Details","danger")
          }
      }
      const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
        }
  return (
    <div >
 
        <div className='form my-4'> 
<form onSubmit={handleSubmit} style={{ 
        width: '100%', 
        marginTop: '16px'}}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={credentials.email}aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</div>
    </div>
  )
}
