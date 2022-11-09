import { React, useState } from 'react'
import coinbase from '../../assets/coinbase.svg'
import metamask from '../../assets/metamask.svg'
import { ImCross } from "react-icons/im";
import './Modal.css'

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'

const Modal = (props) => {

    if (!props.show) {
        return null
    }
    return (
        <motion.div className='Modal'
            onClick={props.onClose}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition:{
                    duration:0.3
                }
            }}
            exit={{
                opacity: 0
            }}
        >
            <motion.div className='dismiss-modal' onClick={props.onClose}
                initial={{
                    y: -100
                }}
                animate={{
                    y: 0
                }}
                exit={{
                    y: -100
                }}

            >
                <ImCross />
            </motion.div>
            <motion.div
                initial={{
                    y: -100
                }}
                animate={{
                    y: 0
                }}
                exit={{
                    y: -100
                }}

                className='modal-content' onClick={e => e.stopPropagation()}>

                <div className='modal-header'>
                    <h1>{props.heading}</h1>
                    <p>{props.modaldesc}</p>
                </div>
                <div className='modal-buttons'>
                    <Link to="/checkout"><button><img src={metamask} />Metamask</button></Link>
                    <Link to="/checkout"><button><img src={coinbase} />Coinbase Wallet</button></Link>
                </div>
                <div className='modal-footer'>
                    <a href="">Learn more about wallets</a>
                    <p>Powered by <a href="#">RareCircles</a></p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Modal
