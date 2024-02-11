import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

export default function StarRating({noOfStars}) {

  const [rating, setRating] = useState(0);
  const[hover, setHover] = useState(0);

  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex);
  }
  function handleMouseLeave(){
    setHover(rating)
  }
  return (
    <div className='bg-slate-400 py-2 px-5 rounded-md flex'>
      {
        [...Array(noOfStars)].map((_,index)=>{
          index+=1
          return <FaStar
          className={index<= (hover || rating)? 'text-yellow-200':'text-white'}
          key={index}
          onClick={()=>handleClick(index)}
          // onMouseEnter={()=>handleMouseEnter(index)}
          onMouseLeave={()=> handleMouseLeave()}
          onMouseOver={()=>handleMouseEnter(index)}
          size={40}
          />
        })
      }
    </div>
  )
}
