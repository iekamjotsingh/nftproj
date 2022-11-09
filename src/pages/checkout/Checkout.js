import React from 'react'
import './Checkout.css'
import metamask from '../../assets/metamask.svg'
import { AiFillCheckCircle } from "react-icons/ai";

import {motion} from 'framer-motion'

import {Link} from 'react-router-dom'

const Checkout = () => {
    return (
        <div className='checkout'>
            <motion.div className='checkout-content' initial={{
                opacity: 0,
                y:-40
            }}
            animate={{
                opacity: 1,
                y:0,
                transition:{
                    duration:0.8
                }
            }}
            exit={{
                opacity: 0
            }}>
                <h1 className='checkout-content_h1'>You’re just a few steps away from owning an 8-bit Mafia NFT 🤞</h1>
                <p className='checkout-content_p'>You’re logged in as 0x9057...d9fAc. Not you?</p>
                <div className='wallet-desc'>
                    <p>Connect your wallet</p>
                    <button><img src={metamask}/><b>MetaMask</b>&nbsp; (0x9057...d9fAc) <AiFillCheckCircle className='icon-right-checkout'/></button>
                    <span>
                        Change your wallet
                    </span>

                </div>
                <div className='checkout-desc'>
                    <div className='checkout-desc_p'>
                        <p>Subtotal</p>
                        <p>0 ETH</p>
                    </div>
                    <div className='checkout-desc_p'>
                        <p>Total due</p>
                        <p>0 ETH</p>
                    </div>
                </div>

                <Link to="/confirmation"><button className='mint-button'> Mint</button></Link>

                <p className='credits'><b>Powered by</b><a href=""> RareCircles</a></p>
            </motion.div>
        </div>
    )
}

export default Checkout