import React from 'react'

const Menubar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1 className="text-black">Movie Browser</h1>
      <button color="primary">Login</button>
    </div>
  )
}

export default Menubar
