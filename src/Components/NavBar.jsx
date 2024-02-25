import React, { useContext, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Data } from './Data';
import { AppContex } from './useContex';

function NavBar() {
  const contexValue = useContext(AppContex)
  return (
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" style={{marginLeft:'25rem',cursor:'pointer'}}>FakeStore</a>
      <form class="d-flex" role="search">
      </form>
      <button type="button" class="btn btn-primary position-relative" style={{width:'3rem',marginRight:'12rem'}}>
      <FaCartShopping style={{marginRight:'25rem',cursor:'pointer'}}/>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {contexValue.badgeCount}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
    </div>
  </nav>
  )
}

export default NavBar