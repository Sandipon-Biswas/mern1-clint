import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { UserContext } from '../App';
import { apiurl } from '../config/api';
const LogOut = () => {
    let navigate  = useNavigate();
    const {state,dispatch} = useContext(UserContext);
    
    useEffect(()=>{
        localStorage.clear();
        fetch (apiurl + "/logout",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },

        }).then((res)=>{
            dispatch({type:"USER",payload:false})   
            navigate("/login", { replace: true });
            if(res.status !== 200){
                const error = new Error(res.error);
                throw error;
            } 
        }).catch((err)=>{console.log(err);})
    })
    return (
        <>
            
        </>
    )
}

export default LogOut
