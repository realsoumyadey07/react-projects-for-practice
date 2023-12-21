import React from 'react'

function Button({icon,via}) {
  return (
     <div className="viaChat">{icon}{via}</div>
  )
}
export default Button;