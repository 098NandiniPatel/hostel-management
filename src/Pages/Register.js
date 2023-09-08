import React,{useState} from 'react'
import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './login.css'
import registerImg from '../Asset/register1.png'
import userIcon from '../Asset/user.png'

const Register = () => {
  const [credentials,setCredentials]=useState({
    email:undefined,
    universityId:undefined,
    password:undefined,
    confirmPassword:undefined
})
  const handleChange= e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
};
  const handleClick=e=>{
    e.preventDefault();
  }
  return <section>
    <Container className='form-section'>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt="" />
            </div>
            <div className="login__form">
              {/* <div className="user">
                <img src={userIcon} alt="" />
              </div> */}
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
                
                <FormGroup>
                  <input type="email" placeholder='Email ID' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="number" placeholder='University Id' required id='universityId' onChange={handleChange}/>
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
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Register