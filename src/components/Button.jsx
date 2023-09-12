import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-2 py-1 m-3 rounded-md bg-slate-200  '>
        <button>{name}</button>
    </div>
  )
}

export default Button;