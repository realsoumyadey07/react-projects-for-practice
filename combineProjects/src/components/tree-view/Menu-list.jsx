import React from 'react'
import Menuitems from './Menu-items'

const Menulist = ({list=[]}) => {
  return (
    <ul>
      {
          list && list.length ?
          list.map((item, index) =><Menuitems key={index} item={item}/>)
          :null
      }
    </ul>
  )
}

export default Menulist
