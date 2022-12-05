import React, { useEffect, useState } from 'react';
import Layout from './Layout'
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdLocate } from 'react-icons/io';
import ContactTopCard from './smallComponent/ContactTopCard';
import axios from 'axios';
import { useNavigate } from 'react-router';
const Contact = () => {
const [name, setname] = useState("")
const [email, setemail] = useState("")
const [phone, setphone] = useState("")
const [message, setmessage] = useState("")

// we sent data in server
const handleForm = async (e) => {
    e.preventDefault();


    const res = await fetch("/contact",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,email,phone,message
        })
    });
    const data = await res.json();
    if( !data){
        window.alert("wrong");
        console.log("worng");
    }else{     
        window.alert("success") 
        setmessage("");
    }
};






    return (
        <div>
                <Layout>
                    <div className="container text-light">

                        <div className="row py-5 ">
                            <ContactTopCard cname="Number" icon={< BsPhoneVibrate /> } cnumber="01821247890" />
                            <ContactTopCard cname="Email" icon={< AiOutlineMail /> } cnumber="sandipon@gmail.com" />
                            <ContactTopCard cname="Address" icon={< IoMdLocate /> } cnumber="Dhaka" />
                        </div>
                        <form method="POST">
                        <div style={{border:"3px solid black"}} className="lower_contact p-3 mb-5  ">
                            <h4 className="py-2" >Get In Touch</h4>
                            <div className="row">
                                <div className="col-md-4">  <input type="text" className="mt-2  text-light form-control bg-dark border-0" type="text" name='name' value={name} onChange={(e)=> setname(e.target.value)} placeholder="Enter name"></input> </div>
                                <div className="col-md-4">  <input type="email" className="mt-2  text-light form-control bg-dark  border-0" type="email" name='email' value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Enter email"></input> </div>
                                <div className="col-md-4">  <input type="number" className="mt-2  text-light form-control bg-dark  border-0" type="number" name='phone' onChange={(e)=> setphone(e.target.value)} placeholder="Enter Number"></input> </div>
                            </div>
                            {/* text area */}
                            <textarea placeholder="your comment" name="message" type="text"  value={message} onChange={(e)=> setmessage(e.target.value)} placeholder="Enter email" className="text-light form-control mt-4 bg-dark border-0"  id=""  cols="" rows="5"></textarea>
                            <a onClick={handleForm} className="btn btn-dark mt-3" href=""> Send Message </a>
                            {/* text area */}
                            
                        </div>
                        </form>
                    </div>
                </Layout>
        </div>
    )
}

export default Contact
