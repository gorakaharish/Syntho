"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import group from "./assets/bg-home.png"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import tablet from "./assets/tablet.png"
import one from "./assets/one.png"
import p1 from "./assets/p-1.png"
import p2 from "./assets/p-2.png"
import p3 from "./assets/p-3.png"
import b1 from "./assets/b-1.png"
import b2 from "./assets/b-2.png"
import b3 from "./assets/b-3.png"
import Footer from "./component/Footer";
export default function Home() {
  return (
   
      <div className="mb-5">
        <div className="home_con ">
        <div className="container heroelement">
      <div className="row home_row">
        <div className="col-md-6">
         <h1>
          Leading the Future Of Chemical Synthesis
         </h1>
         <h4>innovative Solutions for the Pharmaceutical industry</h4>
         <div>
          <button>Contact Us</button>
         </div>
        </div>
        <div className="col-md-6 img_group ">
          <Image src = {group} className="group_img" />
</div>
      </div>
     </div>
        </div>
  
     {/* second part */}
     <div className="container">
      <div className="row second-row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <p>Syntho Chirals (P) Ltd have a CGMP manufacturing facility located in Bidar, Karnataka State, 120KM from Hyderabad. We produce a wide range of API-Intermediates and Fine Chemicals, especially Chirals, Chiral Catalysts, chiral building blocks, heterocyclic compounds, and other active pharmaceutical ingredient compounds. We have a safety management system in place and adhere to responsible care programs. Syntho has established a global network of numerous customers from many research centers, pharmaceutical companies, and chemical factories in the USA, Europe, and Japan.</p>
        </div>
     
     <div className="col-md-6">
     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="swiper">
        <Image src={one} className="w_img"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={group} className="w_img"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={one} className="w_img"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={group} className="w_img"/>
      </SwiperSlide>
    </Swiper>
     </div>
      </div>
    </div>
{/* second part end */}
{/* third part start */}
<div className="container third_row">
<div className="row">
<div className="col-md-4 pils">
<Image src={tablet} />
</div>
<div className="col-md-8">
<div className="container">
<div className="row">
<div className="col-md-4">
<div className="parent">
<div className="child-1">
<p>Research</p>
</div>
<div className="child-2">
<Image src={p1} className="Img"/>
</div>
</div>
</div>
<div className="col-md-4">
<div className="parent">
<div className="child-1">
<p>Manufacturing</p>
</div>
<div className="child-2">
<Image src={p2} className="Img"/>
</div>
</div>
</div>
<div className="col-md-4">
<div className="parent">
<div className="child-1">
<p>Quality</p>
</div>
<div className="child-2">
<Image src={p3} className="Img"/>
</div>
</div>
</div>
<div className="content">
<p>Biophore develops and manufactures niche pharmaceutical
products for global markets, helping customers reach the
market early and ensuring quicker patient access.</p>
</div>
</div>

</div>

</div>

</div>


</div>

{/* third part end */}

{/* fourth start */}



{/* fourth -end */}
<div className="container fourth">
  <h1>Buisness Unites</h1>
<div className="row row-data">
<div className="col-md-4 b-1 d-flex justify-content-center align-items-center">
<div>
<div className="circle">
<Image src={b1} alt="image"/>
 </div>
 <div>
<h4 className="text-center text">Apis</h4>
</div>
</div>
</div>
<div className="col-md-4 b-1 d-grid justify-content-center align-items-center">
<div>
<div className="circle">
<Image src={b2} alt="image"/>
</div>
<div>
<h4 className="text-center text">Project Under Collabration</h4>
</div>
</div>
</div>
<div className="col-md-4 text-center  d-grid justify-content-center align-items-center">
<div>
<div className="circle">
<Image src={b3} alt="image"/>
</div>
<div>
<h4 className=" text">Project Under Collabration</h4>
</div>
</div>
</div>

</div>
</div>



    </div>

  );
}
