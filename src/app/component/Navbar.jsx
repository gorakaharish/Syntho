"use client"
import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
import logo from "../assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter()
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      },);

      const senditem = () =>{
       router.push("/signin")
      }
  return (
    <div>
      <div className="container">
      <nav className="navbar navbar-expand-lg  fixed-top">
  <div className="container  bg-body-tertiary nav">
    <a className="navbar-brand" href="#">
    <Image
        src={logo}
        alt="A beautiful scenery"
        width={300}
        height={40}
        className='logo'
      />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link"  aria-current="page" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="/about">About Us </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/research">Operations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/blog">Blogs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/gallery">Gallery</a>
          </li>
          <li className="nav-item">
          <Link className="nav-link " href="/contactus">Contact us</Link>
          </li>
          <li className="nav-item">
           <button className="nav-link btns" onClick={senditem}>Login</button>
          </li>
        </ul>
     
      </div>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Navbar
