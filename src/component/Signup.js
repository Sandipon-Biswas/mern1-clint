import React, { useState } from 'react'
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";
import Layout from './Layout';
import Logo from './Logo';
import { NavLink} from 'react-router-dom';


const Signup = () => {
    let navigate  = useNavigate();
    const [user, setuser] = useState ({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    });

 let name,value;
    const handleinputs = (e) => {
        name=e.target.name;
        value=e.target.value;
        setuser({...user,[name]:value})
    };
    const dataPost = async (e) => {
        e.preventDefault();
        const {name,email,phone,work,password,cpassword}=user;

        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });
        const data = await res.json();
        if(res.status===422 || !data){
            window.alert("Give same password or unique email");

        }else{ 
            window.alert("success");     
            navigate("/login");
        }
    };
    
    return (
        <div  >
            <Layout>
        <div className=" my-3 height-100 container d-flex justify-content-center align-items-center ">
            <div className="px-4 pb-4 pt-4 bg-dark text-light rounded">
               
          <Form methot="POST" className=" " >
            <div className="text-center mb-3">
                <Logo/>
            </div>
            <Form.Group className="mb-3" >
                <Form.Control autoComplete="off"  type="text" value={user.name} name="name"  onChange={handleinputs} placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" >

                        <Form.Control type="email" autoComplete="off" value={user.email} name="email"  onChange={handleinputs} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" >
 
                        <Form.Control type="number" autoComplete="off" value={user.phone} name="phone"  onChange={handleinputs} placeholder="Enter Number" />
            </Form.Group>
            <Form.Group className="mb-3" >

                        <Form.Control type="text" autoComplete="off" value={user.work} name="work"  onChange={handleinputs} placeholder="Enter your work" />
            </Form.Group>
            <Form.Group className="mb-3" >

                <Form.Control type="password" autoComplete="off" value={user.password} name="password"  onChange={handleinputs} placeholder="Password" />
            </Form.Group>            
            <Form.Group className="mb-3" >

                <Form.Control type="password" autoComplete="off" value={user.cpassword} name="cpassword"  onChange={handleinputs} placeholder="Retype Password" />
            </Form.Group>
            <Button className=" w-100 " onClick={dataPost} variant="primary" type="submit">
              Sing up
            </Button>
        </Form> 
                
        <div className="togle-box">
               <p className="text-center mt-2 pt-3">Already have an account? <span><NavLink to="/login"  > Log in</NavLink></span></p> 
            
                
            </div>
            </div>
        </div>
        </Layout>
    </div>
    )
}

export default Signup
