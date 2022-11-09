import React from 'react'
import './Card.css'

const Card = (props) => {
  // let classNamescard;
  // if(props.className == '' && props.className == 'undefined'){
  //   classNamescard = null;
  // } else{
  //   classNamescard = props.className;
  // }
  return (
    <div className={props.className + ' card-main'}>{props.children}</div>
    
  )
}

export default Card