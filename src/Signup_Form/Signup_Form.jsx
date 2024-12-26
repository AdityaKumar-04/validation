import React from 'react';
import Signupbtns from '../Buttons/Signupbtns';
import '../Style.css'
import { useState } from 'react';

export default function Signup_Form() {
    const [userdata, setuser] = useState({
        email: "",
        phone : "",
        password : ""
    });
    const [formerror , setformerror] = useState({
        email:"",
        phone:"",
        password:""
    })
    const [formvelid , setformvalid] = useState({
        email:"",
        phone:"",
        password:""
    })
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const emailverl = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let errors = {};
        let valid = {}
        if(emailverl.test(userdata.email)){
            valid.email= "Email is valid"
        }else{
            errors.email = "Enter your valid email"
        }
        
        if(!userdata.phone.trim()){
            errors.phone = "Enter your phone number"
        }
        else{
            valid.phone = "Phone Number is valid"
        }
        if(passwordRegex.test(userdata.password)){
            valid.password = "Password is Valid"
        }
        else{
            errors.password = "Enter strong password"
        }
        setformerror(errors)
        setformvalid(valid)
        if(Object.keys(errors).length === 0){
            console.log("form Submit", userdata)
            setuser({...userdata , email:"",phone:"",password:""})
            setformvalid({...formvelid , email:"",phone:"",password:""})
            setformerror({...formerror , email:"",phone:"",password:""})
            
        }
    }
    
  return (
    <div>
      <div className="form-box">
        <div className="form-main">
            <div className="title">
            <h1>Create an Intuit account</h1>
            <p>One account for everything Intuit including Mint<a href="#">Learn More</a></p>
            </div>

            <form action="" onSubmit={handleSubmit}>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={userdata.email} onChange={(e)=> setuser({...userdata ,email:e.target.value})} placeholder='Email'/>
                    {formerror.email&&<span>{formerror.email}</span>} {formvelid.email&& <p>{formvelid.email}</p>}
                </div>
                <div className="input-box">
                    <label htmlFor="phone">Phone </label>
                    <input type="text" maxLength={10} value={userdata.phone} onChange={(e)=> setuser({...userdata,phone:e.target.value})} placeholder='Phone Number'/>
                    {formerror.phone&& <span>{formerror.phone}</span> }
                    {formvelid.phone&& <p>{formvelid.phone}</p> }
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={userdata.password} onChange={(e)=> setuser({...userdata, password: e.target.value})} placeholder='Password'/>
                    {formerror.password&&<span>{formerror.password}</span>}{formvelid.password&& <p>{formvelid.password}</p>}
                </div>
                <div className="input-box">
                    <Signupbtns btnsname = "Create Account"/>
                </div>
            </form>
            <div className="condition">
                <p>By Selecting Creating account You agree To our Terms and have read 
                    and acknowledge our Globel Privacy Statement
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

