"use client"
import React from 'react'
import Image from "next/image"
import Beaker from "../assets/Beacker.png"
import Footer from '../component/Footer'
const page = () => {
  return (
    <div className='about_page mb-5'>
      <div className='about'>
      </div>
    

     <div className="container">
        <div className="row my-5">
            <div className="col-md-6"> 
             <h5 style={{color:"#418E41",fontWeight:"700"}}       >REGISTERED OFFICE :</h5>
             <p>66/B,Phase-II, IDA, MALLAPUR HYDERABAD-500076, INDIA</p>
             <ul>
                <li><b>PHONE : </b><span>+91-40-27178028</span></li>
                <li><b>FAX : </b><span>+91-40-27153793</span></li>
                <li><b>MAIL : </b><span style={{color:"#418E41",fontWeight:"700"}} >info@synthochirals</span></li>
             </ul>
             <h5 className='my-4' style={{color:"#418E41",fontWeight:"700"}} >PLANT ADDRESS :</h5>
             <ul>
                <li><b>PLOT NO - </b><span>53b & 54P</span></li>
                 <p className='my-2'>Kolhar  Industrial Area, Kolhar Bidar-585401,  Karnataka ,  INDIA.</p>
                <li><b>PHONE : </b><span>08482-232499.</span></li>
             </ul>
            </div>
            <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6369689883663!2d78.57000027594054!3d17.429201201597667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90f74bffffff%3A0x609797bc75a95e3e!2sSyntho%20Chirals%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718256262743!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
     </div>


{/* third part */}

<div className='contact'>
   <div className="container contact-border">
 <div>
<h3 className='head'>Get in <span style={{color:"#418E41"}}>touch</span> with us today</h3>
 </div>
 <div className='contact_input'>

<div className='con'>
<div>
   <input type="text" placeholder='Name' name="" id="" />
</div>
<div>
   <input type="email" placeholder='email' name="" id="" />
</div>
</div>
<div className='con'>
<div>
   <input type="number" maxLength={10} minLength={10} placeholder='PhoneNumber' name="" id="" />
</div>
<div>
   <input type="text" placeholder='Subject' name="" id="" />
</div>
</div>
<div className='d-flex'>
<div>
   <input type="text" placeholder='Your Message' name="" id="" />
</div>
</div>
<div>
   <button className='btn btn-success my-3 ms-3'>submit</button>
</div>

 </div>
   </div>
</div>


    </div>

  )
}

export default page
