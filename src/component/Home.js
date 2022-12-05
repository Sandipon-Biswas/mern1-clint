import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import axios from 'axios';


const Home = () => {


    const [data, setdata] = useState({});
    const [login, setlogin] = useState("Happy to see you back")

    const callAllpage = async () => {
        try {
            axios.get('/homeandcontact')
            .then(about => setdata(about.data))
            .catch(e => setlogin("we are the mearn developer"))


            
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        callAllpage()
    }, [])







    return (
        <div>
            <Layout>

            <div style={{minHeight:"90vh"}} className="home_contenct d-flex justify-content-center align-items-center flex-column ">

                <p className="text-light mb-0" >Welcome</p>
                <h1 className="text-info text-capitalize" >{data.name}</h1>
                <p className="text-light" > {login} </p>
            </div>
            </Layout>
        </div>
    )
}

export default Home
