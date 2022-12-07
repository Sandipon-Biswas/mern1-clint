import React, { useContext, useState } from 'react'
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";
import Layout from './Layout';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';
import { apiurl } from '../config/api';

const Login = () => {
    const {state,dispatch} = useContext(UserContext);
    let navigate  = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();


        const res = await fetch(apiurl + "/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password,
            })
        });
        const data = await res.json();
        console.log(data);
        if(res.status===400 || !data){
            window.alert("wrong");
            console.log("worng");
        }else{  
            dispatch({type:"USER",payload:true})   
            window.alert("success") 
            localStorage.setItem("token", JSON.stringify(data.token) )
            navigate("/");
        }
    };
    
    return (
        <div  >
        <Layout>
    <div className=" my-3 height-100 container d-flex justify-content-center align-items-center ">
        <div className="px-4 pb-4 pt-4 bg-dark text-light rounded">
    <Form method="POST" className=" " >
        <div className="text-center mb-3">
            <Logo/>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name='email' value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Enter email" />
        </Form.Group>
 

        <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Control type="password"  name='password' value={password} onChange={(e)=> setpassword(e.target.value)}  placeholder="Password" />
        </Form.Group>            

        <Button className=" w-100 " onClick={loginUser} variant="primary" type="submit">
          
          Login
        </Button>
    </Form>
            
    <div className="togle-box">
           <p style={{fontSize:"15px"}} className="text-center mt-2 pt-3">Don't have an account? <span><NavLink to="/signup"  > Sign Up</NavLink></span></p> 
        
            
        </div>
        </div>
    </div>
    </Layout>
</div>
    )
}

export default Login
