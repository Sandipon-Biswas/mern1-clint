import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router';

import axios from 'axios';
import { apiurl } from '../config/api';
const About =  () => {
    let navigate  = useNavigate();
    const [data, setdata] = useState({});
    const callAllpage = async () => {
        let token = JSON.parse(localStorage.getItem("token"))
        console.log(token);
        axios.get( apiurl + '/about',{
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(about => setdata(about.data))
        .catch(e => console.log(e))

        try{

            if(!token){
                const error = new Error("eror");
                throw error;
                
            }            

        }
        catch(err){
            console.log(err.message)
             navigate('/login');
        }
    };
    
    useEffect(() => {
        callAllpage()
    }, [])



    return (
        <div>
            <Layout>
                <div className="container py-4">
                    <form method="GET" >
                        <div className="row p-4 bg-dark text-light">
                            <div className="col-md-4"> <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt=""/> </div>
                            <div className="col-md-6">
                                <div className="profile_head">
                                    <h4>{data.name}</h4>
                                    <h6 className="text-info"> {data.work} </h6>
                                    <p className=" opacity-50 small " > RANKING:  <span>2/10</span> </p>
                                    {/* tab */}
                                        <Tabs
                                        defaultActiveKey="about"
                                        id="uncontrolled-tab-example"
                                        className="mb-3"
                                        >
                                        <Tab eventKey="about" title="About">
                                           {/*  */}
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p  className="text-warning " >Work link</p>
                                                    <div> <a className=" text-light text-decoration-none list-unstyled " href="">Youtube</a> </div>
                                                    <div>  <a className=" text-light text-decoration-none list-unstyled " href="">facebook</a> </div>
                                                    <div>  <a className=" text-light text-decoration-none list-unstyled " href="">Instragram</a> </div>
                                                    <div>  <a className=" text-light text-decoration-none list-unstyled " href="">Linkin</a> </div>
                                                    <div>   <a className=" text-light text-decoration-none list-unstyled " href="">Linkin</a> </div>
                                                    
                                                </div>
                                                <div className="col-md-8">
                                                    <p className="text-warning " >User info</p>
                                                    <div className="d-flex justify-content-between " > <span>User ID</span> <span className="text-info" >22113038</span> </div>
                                                    <div className="d-flex justify-content-between " > <span>Name</span> <span className="text-info" >{data.name}</span> </div>
                                                    <div className="d-flex justify-content-between " > <span>Email</span> <span className="text-info" >{data.email}</span> </div>
                                                    <div className="d-flex justify-content-between " > <span>Phone</span> <span className="text-info" >{data.phone}</span> </div>
                                                    <div className="d-flex justify-content-between " > <span>Profession</span> <span className="text-info" >{data.work}</span> </div>
            
                                                </div>
                                            </div>
                                           {/*  */}
                                        </Tab>
                                        <Tab eventKey="timeline" title="Timeline">
                                        {/*  */}
                                        <div className="row">
                                            <div className="col-md-12">
                                                    <p className="text-warning " >Exprence</p>
                                                    <div className="d-flex justify-content-between " > <span>Exprence</span> <span className="text-info" >Expert</span> </div>
                                                    <div className="d-flex justify-content-between " > <span>Hourly Rate</span> <span className="text-info" >10$</span> </div>
                                                    <div className="d-flex justify-content-between " > <span>Project</span> <span className="text-info" >100</span> </div>
                                                    <div className="d-flex justify-content-between " > <span>English Lavel</span> <span className="text-info" >Expert</span> </div>
                                                    <div className="d-flex justify-content-between " > <span>Availablity</span> <span className="text-info" >6 Month</span> </div>
            
                                                </div>
                                            </div>
                                        {/*  */}
                                        </Tab>

                                        </Tabs>
                                    {/* tab e */}
                                </div>
                            </div>
                            <div className="col-md-2 mt-3">
                                <input className="btn btn-info btn-sm" type="button" value="Edit Profile"/>
                            </div>
                        </div>

                    </form>
                </div>
            </Layout>

        </div>
    )
}

export default About
