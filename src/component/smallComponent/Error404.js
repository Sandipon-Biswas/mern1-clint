import React from 'react'
import Layout from '../Layout'
import { NavLink } from 'react-router-dom';
export const Error404 = () => {
    return (
        <>
        <Layout>
        <div style={{minHeight:"100vh"}} className=" align-items-center justify-content-center d-flex">
            {/*  */}

            {/*  */}
            <div>
            <h1 className="text-light mb-3" >Page not found</h1>
            <div className="text-center"><NavLink className="btn btn-dark text-center" to="/">Back Home</NavLink></div>
            </div>
        </div>
        </Layout>   
        </>
    )
}
