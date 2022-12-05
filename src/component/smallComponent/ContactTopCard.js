import React from 'react'
import { FcTwoSmartphones } from 'react-icons/fc';
const ContactTopCard = (props) => {
    return (
        <>
                            <div className="col-md-4 mt-2 ">
                                <div style={{border:"3px solid black"}} className="bg-dark text-light d-flex justify-content-start  p-2">
                                    <div style={{fontSize:"26px"}} className=" px-2 justify-content-center align-items-center d-flex " > {props.icon} </div> 
                                    <div> 
                                        <div className="row"><strong>{props.cname}</strong></div>
                                        <div className="row"><span>{props.cnumber}</span></div>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export default ContactTopCard
