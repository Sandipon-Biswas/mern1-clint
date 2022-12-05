import React from 'react'
import Logo from './Logo'


const Footer = () => {
    return (
<div className="bg-dark">
    <div className="container pt-5 pb-2 text-light">
        <div className="row">
            <div className="col-md-6 text-light">
                <span> { <Logo/> } </span>
                <p className=""> <b className="text-info">Made by Sandipon Biswas</b> <br/> This app made for login , signup and logout functionality.
                In the about page there are some dynamic data from datatbase.
                 </p>

            </div>
            <div className="col-md-3    ">
                <h5>Links</h5>
                <p>home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div   className="col-md-3 ">

                <h5>Contact</h5>
                <p>013243523554</p>
                <p>dhaka</p>
                <p>Example@gmail.com</p>

            </div>
        </div>
    </div>
</div>
    )
}

export default Footer