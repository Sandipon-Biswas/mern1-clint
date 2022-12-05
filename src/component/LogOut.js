import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { UserContext } from '../App';
const LogOut = () => {
    let navigate  = useNavigate();
    const {state,dispatch} = useContext(UserContext);
    
    useEffect(()=>{
        fetch("/logout",{
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
