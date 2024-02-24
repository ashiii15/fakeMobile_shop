import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

function NavBar() {
  return (
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" style={{marginLeft:'25rem',cursor:'pointer'}}>FakeStore</a>
      <form class="d-flex" role="search">
      </form>
      <FaCartShopping style={{marginRight:'25rem',cursor:'pointer'}}/>
    </div>
  </nav>
  )
}

export default NavBar