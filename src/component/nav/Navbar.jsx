import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
  
<div className="container-fluid navv">
<div className="container px-5 ">
  <div className="row px-5">

  <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="fs-3 fw-bolder text-white" href="#">ORANGESQUARE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


      <ul className="navbar-nav  py-5  mb-2 mg-lg-0">
        <li className="nav-item">
          <Link className="nav-link active f-Font" aria-current="page" to="#">MADE-TO-MEASURE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link f-Font" aria-current="page" to="home/1">READY-TO-WEAR</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link f-Font" aria-current="page" to="#">SHOES</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link f-Font" aria-current="page" to="#">ACCESSORIES</Link>
        </li>
        <li className="nav-item icons">
          <div className='icon-sh '>
          <Link className='px-3 text-white' to="#" ><span className="fa-solid fa-magnifying-glass"></span></Link>
          <Link className='px-3 px-3 text-white' ><i class="fa-regular fa-heart"></i> </Link>
          <Link className='px-3 text-white' to="cart/1"><i class="fa fa-shopping-bag text-white fs-5" aria-hidden="true"></i></Link>

          </div>
        </li>
      </ul>

        <li >
            
      <ul className="navbar-nav fw-bolder   m-auto mb-lg-0 sc-nav sc-nav">
      
      <li className="nav-item">
          <Link className="nav-link f-Font " aria-current="page" to="#">READY-TO-WEAR</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link f-Font" aria-current="page" to="#">SHOES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link f-Font" aria-current="page" to="#">ACCESSORIES</Link>
        </li>

      </ul>
        </li>
      </ul>
    


    </div>
  </div>
</nav>


  </div>
</div>
</div>
  


  </>
}
