import React from 'react'
import menus from './components/tree-view/data.js';
import TreeView from './components/tree-view/Index.jsx';

const App = () => {
  return (
    <div>
      {/* tree view component */}
      <TreeView menus={menus}/>
    </div>
  )
}

export default App
