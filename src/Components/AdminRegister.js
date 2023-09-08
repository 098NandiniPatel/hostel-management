import React,{useState} from 'react'
import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'

import './admin-register.css'
import { Link } from 'react-router-dom'

const AdminRegister = () => {
    const [admin,setAdmin]=useState({
        email:undefined,
        university:undefined,
        password:undefined,
        confirmPassword:undefined
    })
      const handleChange= e =>{
        setAdmin(prev=>({...prev,[e.target.id]:e.target.value}))
    };
      const handleClick=e=>{
        e.preventDefault();
      }
  return (
    <section>
            <div className="admin-register-form">
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
                
                <FormGroup>
                  <input type="email" placeholder='Email ID' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder='University Name' required id='university' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' required id='password' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Confirm Password' required id='confirmPassword' onChange={handleChange}/>
                </FormGroup>
                <Button className="btn secondary__btn auth__btn" type='submit'>Create Account</Button>
              </Form>
              <p>Already have an account?<Link to='/login'><b>Login</b></Link></p>
            </div>
    </section>
  )
}

export default AdminRegister