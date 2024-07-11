"use client"
import React from 'react'
import Image from "next/image"
import Beaker from "../assets/Beacker.png"
import Footer from '../component/Footer'
const Page = () => {
  return (
    <div className='about_page'>
      <div className='about'>
      </div>
<div className="container my-5">
  <h3  style={{color:"#418E41",fontWeight:"600"}}>Our Story</h3>
  <hr style={{width:"7%",height:"4px",backgroundColor:"#418E41",opacity:"1",border:"none",borderRadius:"10px"}} />
  <p style={{textAlign:"justify"}}>Our Story
Syntho Chirals Private Limited (SCPL) was founded in 2008 by experienced pharmaceutical professionals. Situated in Bidar, Karnataka, near Hyderabad's pharmaceutical hub, 
SCPL specializes in the development and manufacturing of API intermediates and chiral compounds. Our core competency lies in producing high-quality, reliable intermediates
for the pharmaceutical, agrochemical, and biotechnology industries.
</p>
  <div className="row about-row">
    <div className="col-md-6">
       <div>
        <h4 style={{color:"#418E41",fontWeight:"600"}}>Mission</h4>
        <p style={{textAlign:"justify"}}>Mission

to deliver high-quality chiral intermediates and APIs, meeting predefined quality
standards  and ensuring timely delivery, while maintaining a commitment to 
environmental sustainability and regulatory compliance.
</p>
       </div>
<br />
       <div>
        <h4 style={{color:"#418E41",fontWeight:"600"}}>Vission</h4>
        <p style={{textAlign:"justify"}}>Vision to be a global leader in chiral chemistry, known for innovation, reliability, and quality, continuously exceeding customer expectations and contributing to advancements in pharmaceutical and chemical research.</p>
       </div>

       <br />
       <div>
        <h4 style={{color:"#418E41",fontWeight:"600"}}>Our Values</h4>
       <div>
        <ul>
          <li>
            <b>Innovation : </b><span>Continually pushing the boundaries of chiral chemistry.</span>
          </li>
          <li>
            <b>Quality : </b><span>Ensuring the highest standards in every product.
            </span>
          </li>
          <li>
            <b>Reliability : </b><span>Consistently meeting and exceeding customer expectations.</span>
          </li>
          <li>
            <b>Sustainability : </b><span> Adopting eco-friendly and compliant manufacturing practices.</span>
          </li>
        </ul>
       </div>
       </div>
    </div>
    <div className="col-md-6 Beaker_cover">
<Image src={Beaker} className='beaker'/>
    </div>
  </div>
  <h3 style={{color:"#418E41",fontWeight:"600"}}>
  Our Core Competencies
  </h3>
  <hr style={{width:"7%",height:"4px",backgroundColor:"#418E41",opacity:"1",border:"none",borderRadius:"10px"}} />
  <ul style={{textAlign:"justify"}}>
    <li><b>High-Quality Production : </b><span>Our expertise in chiral intermediates and APIs has positioned us as a trusted partner in the industry. We pride ourselves on delivering                    
       products with predefined quality attributes and reliable, timely delivery.
</span></li>
<li><b>Sustainability and Compliance : </b><span> We are committed to sustainable practices, with our trade effluent being treated by a Forced Evaporation System. 
       Certification  work for ISO 9001:2008, WHO GMP, ISO 14001:2004, and OHSAS 18001:2007 standards is ongoing.

</span></li>
  </ul>
</div>


{/* leadership page */}
<div className="container">
  <div className='d-grid justify-content-cener align-items-center'>
  <h2 className='text-center ' style={{color:"#418E41",fontWeight:"600"}}>Our Leadership</h2>

  </div>
  
  <div className="row about-row leader">
   <div className="col-md-3 col-sm-6">
   </div>
   <div className="col-md-3 col-sm-6"></div>
   <div className="col-md-3 col-sm-6"></div>
   <div className="col-md-3"></div>
   <div className="col-md-3"></div>
   <div className="col-md-3"></div>
   <div className="col-md-3"></div>
   <div className="col-md-3"></div>
  </div>
</div>

{/* <Footer /> */}
    </div>

  )
}

export default Page
