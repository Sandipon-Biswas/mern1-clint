import React from 'react'
import Footer from './Footer'
import Nabber from './Nabber'

const Layout = ({children}) => {
    return (
        <>
        <Nabber/>
            {children}
        <Footer/>
        </>
    )
}

export default Layout