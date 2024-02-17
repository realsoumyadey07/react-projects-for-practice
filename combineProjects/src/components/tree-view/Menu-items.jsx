import React, { useState } from 'react'
import Menulist from './Menu-list'

const Menuitems = ({item}) => {
  const [displaCurrChildren, setDisplayCurrChildren]  = useState();
  function handleToggleChildren(getCurrLabel)
{
     setDisplayCurrChildren({...displaCurrChildren,[getCurrLabel]: !displaCurrChildren[getCurrLabel]});
}  return (
    <li>
     <div style={{display:'flex',alignItems:'center', gap: '20px'}}>
      <p>{item.label}</p>
      {item && item.children && item.children.length > 0 ? <span onClick={()=> handleToggleChildren(item.label)}>+</span>: null}
      </div>
      {
          item && item.children && item.children.length>0?
          <Menulist list={item.children}/>
           :null
      }
    </li>
  )
}

export default Menuitems
