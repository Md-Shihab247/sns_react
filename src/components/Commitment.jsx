import img from "../assets/img/Group 2442.png"

const Commitment = () => {
  return (
    <>
         <section className="vision">
            <div className="container">
               <div className="sidebyside">
                <div className="comitment">
                    <h2 className="vis_header poppins-bold ">Our Commitment to Mission and Vision</h2>
                    <ul className="vi_text">
                        <li>
                           <div className="group_one">
                            <i class="fa-regular fa-file"></i> 
                            <h3 className="poppins-semibold">Mission</h3>
                           </div>
                           <p className="peragraph">At Borderless Chain, we aim to connect and empower communities through a secure and inclusive platform. 
                            We bridge cultural gaps and drive growth with innovative technology, fostering global connections and empowerment for all.</p>
                        </li>

                        <li>
                           <div className="group_one">
                            <i class="fa-solid fa-star-of-life" id="gold"></i>
                            <h3 className="poppins-semibold">Vision</h3>
                           </div>
                           <p className="peragraph">Borderless Chain aims to be a global leader in supporting youth, empowering communities, and enhancing collaboration. We envision a world where everyone thrives, bridging cultural gaps and promoting social justice for a sustainable future.</p>
                        </li>
                       
                    </ul>
                </div>
                 <img className="vis_img" src={img} alt="comitment"/>
               </div>
            </div>
        </section>
    </>
  )
}

export default Commitment