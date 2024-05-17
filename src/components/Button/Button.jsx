import React from 'react'

function Button({ ...rest }) {
  return (
    <button {...rest}>{rest.value}</button>
  )
}

export default Button