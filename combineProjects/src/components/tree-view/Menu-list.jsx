import React from 'react'
import Menuitems from './Menu-items'

const Menulist = ({list=[]}) => {
  return (
    <ul className='bg-blue-800'>
      {
          list && list.length ?
          list.map((item, index) =><Menuitems key={index} item={item}/>)
          :null
      }
    </ul>
  )
}

export default Menulist
