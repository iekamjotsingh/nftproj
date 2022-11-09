import React from 'react'
import './confirmation.css'
import nft from '../../assets/nft.png'
import { AiOutlineTwitter } from "react-icons/ai";
import { motion } from 'framer-motion'
import confetti from '../../assets/confetti.webp'

const Confirmation = () => {
  return (
    <div className='confirmation'>
      <img src={confetti} className="confirmation-Confetti"/>
      <motion.div className='confirmation-content' initial={{
        opacity: 0,
        y: -40
      }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        exit={{
          opacity: 0
        }}>
        <img src={nft} />
        <h1 className='confirmation-content-heading'>You claimed Okay Bears #2999</h1>
        <p className='confirmation-content-para'>You can track the transaction on <a href="#">Etherscan.</a></p>
        <button className='share-on-twitter'><AiOutlineTwitter className='icon-confirmation' />Share on twitter</button>
      </motion.div>

    </div>
  )
}

export default Confirmation