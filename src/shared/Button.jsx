import React from 'react'

{/* Stateless Component*/}
const Button = ({className='btn btn-primary', buttonText='Button', onClick, disabled}) => {
  return (
    <button
        disabled={disabled}
        onClick={onClick || null}
        className={className}
    >
        {buttonText}
    </button>
  )
}

export default Button