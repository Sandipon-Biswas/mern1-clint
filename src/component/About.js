import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router';

import axios from 'axios';
const About =  () => {
    let navigate  = useNavigate();
    const [data, setdata] = useState({});
    const callAllpage = async () => {
        axios.get('/about')
        .then(about => setdata(about.data))
        .catch(e => console.log(e))
        try{
            const res = await axios.get("/about");
    
            // const res = await fetch('/about', {           //this res is backend response , not from call back function
            //     method: "GET",
            //     // headers: {
            //     //     Accept: "application/json",
            //     //     "Content-Type": "application/json"
            //     // },
            //     // credentials: "include"
            // });
            // const data =  await res.json();
            
            // console.log(data)
            if(!res.status === 200){
                const error = new Error(res.error);
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
                            <div className="col-md-4"> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8A7zzxSUVQvG3kzvxPkiQraoiUhboIC9KahJo_wmKOpGat6LruRmLg-ALv_V8raD8SU6BEue9Mr2HkF4PORJu1JR85760L4fVYkN73Q8Vua1tO_4i7e2X73U6Y_tpGeJKEG_yEvaF86KY0D66xZ_SnKY4HSiAlPONnYH9jqwqE73Ksc5La-HOmg/s2048/293637168_1145472176016172_6478110558490144243_n.jpg" alt=""/> </div>
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
