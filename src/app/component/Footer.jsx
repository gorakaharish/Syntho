import React from 'react'
import Image from "next/image"
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className='footer '>
      <div className='container'> 
           <div className='row d-flex justify-content-center '>
<div className='col-md-3'>
<div className='cover'>
    <Image src={logo} className='log' />
</div>
<p style={{textAlign:"justify",color:"white"}} className='my-2'>
We have a good number of Professionals who have got immense experience in similar line. Manage both manufacturing and quality control. Have excellent production equipment and the best quality control laboratory to verify the final product. Syntho offers building blocks, and research chemicals that are optimized for drug discovery using chemic informatics-based design, we have the ability to provide a few grams of product or a few kilograms, even hundreds of kilograms of the products. In addition, in-house custom chemistry, and proprietary design services.
</p>
</div>
<div className='col-md-3 footer-col  '>
<div style={{color:"white"}}>
<div>
    <h4 >Quick Links</h4>
</div>
<div >
   <p>Home</p>
   <p>About Us</p>
   <p>Facilities</p>
   <p>Product</p>
   <p>Contact Us</p>
</div>
</div>
    
</div>
<div className='col-md-3 footer-col'>
<div style={{color:"white"}}>
<div>
    <h4 >Products</h4>
</div>
<div>
   <p>Home</p>
   <p>About Us</p>
   <p>Facilities</p>
   <p>Product</p>
   <p>Contact Us</p>
</div>
</div>
</div>
<div className='col-md-3 footer-col'>
<div style={{color:"white"}}>
<div>
    <h4 >Get In Touch</h4>
</div>
<div>
   <p>Home</p>
   <p>About Us</p>
   <p>Facilities</p>
   <p>Product</p>
   <p>Contact Us</p>
</div>
</div>
</div>
           </div>
      </div>
    </div>
  )
}

export default Footer
