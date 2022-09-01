import logo from './logo.svg';
import './App.css';
import About from './About'
import pic from './Ride.png'
import {FaFacebookF} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

function App() {
  return (
  <div className='Form'>
       <div className='Sign'>
             <h5>Don't have an account?<span>  Sign up</span></h5>
                  <h4>EddieShop</h4>
                      <h1>Welcome Back</h1>
                  <label>
                      <p>Your email</p>
                          <input className='Text' name="email" placeholder='   name@domain.com'/>
                  </label>
                       <label>
                       <p>Password</p>
                           <input className='Text' name="password" placeholder='   at least 8 characters'/>
                       </label>
                        <br></br><br></br>
                    <label>
                <input className='Checkbox'></input>   keep me logged in </label>
           </div>
  
        <p className='pass'>Forgot password?</p>
            <button onClick>Login</button>

            <hr className="line" size="1" width="25%" color="black"></hr>
             <h6 className='h6'>Or</h6> 
             <hr className="line2" size="1" width="25%" color="black"></hr>
           
            
               <div>
                  <div className='pic'>
                  <img src={pic}></img>
                  </div>
                  </div>


                  <div className='F'>
                  <FaFacebookF/>
                  </div>
                   <div className='G'>
                  <FaGoogle/>
                 </div>

                  <div className='I'>
                  <FaInstagram/>
                  </div>
                      <About/>
                            </div>
  );
  }
  export default App;
  
