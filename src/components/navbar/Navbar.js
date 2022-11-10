import React from 'react'
import Logo from '../../assets/avatar.png'

import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

import './navbar.css'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link to="/products">
                <motion.img src={Logo} alt={Logo + `Rare circles`} className="Navbar-Logo" animate={{
                    x: [0, 0, 0],
                    scale: [0, 1.4, 1]
                }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }} />


                <h1 className='Navbar-heading'>8-bit mafia</h1>
            </Link>
        </div>
    )
}

export default Navbar