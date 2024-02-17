import React from 'react'
import Menulist from './Menu-list'

const TreeView = ({menus = []}) => {
  return (
    <div>
      <Menulist list={menus}/>
    </div>
  )
}

export default TreeView
