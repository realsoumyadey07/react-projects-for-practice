import React from 'react'
import Button from './Button';
import { MdOutlineChat } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";

function Contactform() {
     let button = [{name:"VIA CHAT SUPPORT",icon:<MdOutlineChat />},{name: "VIA CALL",icon:<FaPhoneAlt />}]
  return (
    <div>
      <div className="via">
          {button.map((e)=>{
               return <Button via={e.name} icon={e.icon}/>
          })}
      </div>
      <div className="email">
      <BsChatLeftTextFill />VIA EMAIL FORM
      </div>
      <form action="" className='inputs'>
          <input type="text" />
          <input type="email" name="" id="" />
          <textarea rows={10} type="text" className='textArea' />
      </form>
      <button className='submit'>SUBMIT</button>
    </div>
  )
}
export default Contactform;