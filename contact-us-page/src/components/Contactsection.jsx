import React from 'react'
import Contactform from './Contactform';

function Contactsection() {
  return (
    <div className='contactSection'>
      <div className="form">
          <Contactform/>
      </div>
      <div className="contactImag">
          <img src="/images/contactImage.png" alt="" />
      </div>
    </div>
  )
}
export default Contactsection;