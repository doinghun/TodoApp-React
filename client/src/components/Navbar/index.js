import React from "react"
import { Menu } from "./styledComponents"

function Navbar() {
  return (
    <Menu>
      <a href='https://github.com/doinghun/todoapp-react'>
        <i className='github icon'></i>
      </a>
    </Menu>
  )
}

export default Navbar
