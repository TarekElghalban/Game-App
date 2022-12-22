import React from 'react'
import { Link } from 'react-router-dom';
import img from '../images/logo.png'
import { useContext } from 'react';
import { LogOutContext } from './../../LogOutContext/LogOutContext';
import { UserDataContext } from './../../UserDataContext/UserDataContext';
export default function Navbar() {
  let {userData} = useContext(UserDataContext)
let {logOut} = useContext(LogOutContext)
 
  return <>
<nav className="navbar mb-lg-5 position-fixed start-0 end-0 top-0   m-auto py-3  navbar-expand-lg navbar-light shadow-lg ps-lg-5 py-2">
  <div className="container-fluid">
<div className='logo d-flex align-items-center'><img src={img} className='w-100 m-0 ms-lg-5 '  alt="" /></div>
    
    <Link className="navbar-brand " to=''><h1 className='h4 ms-lg-5 d-flex align-items-center m-0 text-white'> Game Over</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {userData? <>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to='/register'>Signup</Link> */}
        </li>
        <li className="nav-item ">
          <Link className="nav-link active text-white" to='all'>All</Link>
        </li>
       
        <li className="nav-item dropdown">
          <Link className="nav-link active dropdown-toggle text-white"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" to='/'>
           Platforms
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to='/platforms/pc'>Pc</Link></li>
            <li><Link className="dropdown-item" to='/platforms/browser'>Browser</Link></li>
          </ul>
        </li>
        <li className="nav-item active dropdown">
          <Link className="nav-link active dropdown-toggle text-white" to='' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Sort-by
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to='/sortby/releasdate'>release-date</Link></li>
            <li><Link className="dropdown-item" to='/sortby/populariry'>popularity</Link></li>
            <li><Link className="dropdown-item" to='/sortby/alphapetical'>alphapetical</Link></li>
            <li><Link className="dropdown-item" to='/sortby/relevance'>relevance</Link></li>
          </ul>
        </li>
        <li className="nav-item active dropdown">
          <Link className="nav-link active dropdown-toggle text-white" to='' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Categories
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to='/categories/racing'>racing</Link></li>
            <li><Link className="dropdown-item" to='/categories/sports'>sports</Link></li>
            <li><Link className="dropdown-item" to='/categories/social'>social</Link></li>
            <li><Link className="dropdown-item" to='/categories/shooter'>shooter</Link></li>
            <li><Link className="dropdown-item" to='/categories/openworld'>open-world</Link></li>
            <li><Link className="dropdown-item" to='/categories/zombie'>Zombie</Link></li>
            <li><Link className="dropdown-item" to='/categories/fantasy'>Fantasy</Link></li>
            <li><Link className="dropdown-item" to='/categories/actionrbg'>action-rbg</Link></li>
            <li><Link className="dropdown-item" to='/categories/action'>action</Link></li>
            <li><Link className="dropdown-item" to='/categories/flight'>flight</Link></li>
            <li><Link className="dropdown-item" to='/categories/battleroyal'>battle-royal</Link></li>
          </ul>
        </li>
      </ul>
    </div>

    </>:    
    ''      // <Link className="nav-link active text-white" aria-current="page" to='home'>Home</Link>
}
    </div>
    {userData? <Link to={'/'}><button onClick={logOut}  className='btn btn-outline-info me-lg-5'>Logout</button></Link>  
 : '' }
  


</nav>



  </>
}
