import React from 'react'
import Menubar from './Menubar'

const Layout = props => {
  return (
    <>
      <div className="page-header w-100 bg-dark h-100">
        <Menubar />
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default Layout
