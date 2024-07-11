import React from 'react'
import Image from "next/image"
import research from "../assets/research1.png"
import research2 from "../assets/research2.png"
const page = () => {
  return (
    <div>
<div className='about'>
</div>
<div className="container my-5">
    <h2>RESEARCH AND DEVELOPMENT (R&D)</h2>
    <p>Pioneering Innovations in Chiral Chemistry</p>
    <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-7 ">
              <p style={{textAlign:"justify"}}>At Syntho Chirals, our R&D team is dedicated to advancing chiral chemistry through the development of enantiomerically pure compounds and innovative chemical processes. By leveraging state-of-the-art technology and fostering a collaborative environment, we create novel compounds that meet the specific needs of our clients, ensuring efficiency, scalability, and cost-effectiveness. Our focus includes synthesizing new chemical entities, optimizing existing processes, and collaborating with academic and industry partners to stay at the cutting edge of synthetic chemistry. Through continuous investment in research and development, we maintain our commitment to delivering high-quality solutions that drive pharmaceutical innovation and global health improvements.</p>
        </div>
        <div className="col-md-5 ">
            <Image src ={research} className='r-img'/>
        </div>


        <div className="col-md-5 ">
        <Image src ={research2} className='r-img'/>
            
        </div>
        <div className="col-md-7 ">
            <h2>Manufacturing Excellence</h2>
            <p>Precision, Quality, and Scalability</p>
        <p style={{textAlign:"justify"}}>At Syntho Chirals, our manufacturing operations are driven by a commitment to excellence, utilizing state-of-the-art technology and adhering to stringent CGMP guidelines to ensure the highest standards of quality and compliance. Our advanced manufacturing facilities are designed to scale efficiently from lab-scale to commercial-scale production, allowing us to meet the diverse needs of our clients. We specialize in producing high-quality chiral compounds and API intermediates, employing innovative processes that enhance efficiency and yield while maintaining rigorous quality control measures. Our dedication to sustainability and safety ensures that our manufacturing practices not only meet regulatory requirements but also minimize environmental impact, supporting the development of safe and effective pharmaceutical products.</p>
        </div>



        <div className="col-md-7 my-5 ">
            <h2>Quality Assurance</h2>
              <p style={{textAlign:"justify"}}>Ensuring Excellence in Every Product</p>
              <p style={{textAlign:"justify"}}>At Syntho Chirals, quality assurance is integral to our operations, underpinning every stage of our manufacturing process. We adhere to stringent CGMP guidelines, ensuring that our products meet the highest standards of purity, consistency, and compliance. Our rigorous quality control measures include comprehensive analytical testing and meticulous documentation, enabling full traceability and accountability for each product. Our dedicated quality assurance team employs advanced analytical techniques to monitor every step of the production process, from raw materials to finished products. By maintaining these high standards, we ensure that our chiral compounds and API intermediates are not only effective but also safe for use in pharmaceutical applications. Our unwavering commitment to quality assurance ensures that we consistently deliver products that meet the exacting standards of our clients and regulatory bodies.</p>
        </div>
        <div className="col-md-5">
            <Image src ={research} className='r-img' />
        </div>


        <div className="col-md-5">
        <Image src ={research2} className='r-img '/>
            
        </div>
        <div className="col-md-7">
            <h2>Manufacturing Excellence</h2>
            <p>Precision, Quality, and Scalability</p>
        <p style={{textAlign:"justify"}}>At Syntho Chirals, our manufacturing operations are driven by a commitment to excellence, utilizing state-of-the-art technology and adhering to stringent CGMP guidelines to ensure the highest standards of quality and compliance. Our advanced manufacturing facilities are designed to scale efficiently from lab-scale to commercial-scale production, allowing us to meet the diverse needs of our clients. We specialize in producing high-quality chiral compounds and API intermediates, employing innovative processes that enhance efficiency and yield while maintaining rigorous quality control measures. Our dedication to sustainability and safety ensures that our manufacturing practices not only meet regulatory requirements but also minimize environmental impact, supporting the development of safe and effective pharmaceutical products.</p>
        </div>

    </div>

</div>
    </div>
  )
}

export default page
