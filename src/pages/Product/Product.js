import React, {useState} from 'react'
import nft from '../../assets/nft.png'
import logo from '../../assets/avatar.png'
import './Product.css'
import Card from '../../components/card/Card'
import Modal from '../../components/modal/Modal'
import {motion} from 'framer-motion'

import { FaEthereum } from "react-icons/fa";

const Product = () => {
    const [modalShow,setModalShow] = useState(false)
    return (
        <div className='Product-page'>
            <motion.div className='product-info'initial={{
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
                <div className='product-img'>
                    <img src={nft} alt={nft} />
                </div>

                <div className='product-desc'>
                    <h1 className='product-heading'>Okay Bears #2999</h1>
                    <p className='product-desc-para'>Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.</p>
                    <Card className='creator-table'>
                    
                        {/* <p className='created-by-label'>Created By:</p> */}
                        <img src={logo} alt={logo} />
                        <p>Rogers_0x</p>
                    </Card>
                        
                    <Card className='attribute-cards'>
                        <h5>Attributes</h5>
                       <Card>
                            <b>Background: </b>
                            <p>Yellow</p>
                       </Card>
                       <Card>
                            <b>Headwear: </b>
                            <p>Cowboy</p>
                       </Card>
                       <Card>
                            <b>Jacket: </b>
                            <p>Okay Jacket</p>
                       </Card>
                    </Card>
                    <Card className='product-table' >

                        <div className='product-desc_price'>
                            <p>Mint Price</p>
                            <p>29 &nbsp;<FaEthereum/></p>
                        </div>
                        <button className='mint-button' onClick={()=>setModalShow(true)}>  Connect Wallet</button>
                    </Card>
                    <Modal 
                    onClose={() => setModalShow(false)}
                    show = {modalShow}
                            heading="Connect your wallet to claim" 
                            modaldesc="Use an existing ETH wallet to mint an NFT." />

                </div>
            </motion.div>

        </div>
    )
}

export default Product