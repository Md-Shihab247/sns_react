import img from "../assets/img/mobile.webp"

const Global = () => {
  return (

    <>
        <section className="global">
            <div className="container">
               <div className="section_one">
                <div className="test_header">
                    <h5>Join US</h5>
                    <h3 className="poppins-semibold">Become Part of Our Global Community</h3>
                    <p className="peragraph">Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in
                         pretium morbi integer sagittis. Eu quam nec egestas .</p>
                </div>
               </div>

               <div className="section_two">
                    <div className="item1">
                        <h4 className="poppins-semibold">SNS & Community Site
                            <i class="fa-solid fa-arrow-right"></i>
                        </h4>

                        <ul>
                            <li>
                                <span className="check_box">
                                    <i class="fa-solid fa-check"></i>
                                </span>
                                <b className="uper_text poppins-medium">Connect with Millions:</b>  
                               <p className="peragraph"> Engage with a global network of like-minded individuals, expanding your professional and personal circles.</p>
                            </li>
                            <li>
                                <span className="check_box">
                                    <i class="fa-solid fa-check"></i>
                                </span>
                                <b className="uper_text poppins-medium">Discover Opportunities:</b>
                               <p className="peragraph">Unlock new business ventures, find friends, and access resources for personal growth.</p>
                            </li>
                            <li>
                                <span className="check_box">
                                    <i class="fa-solid fa-check"></i>
                                </span>
                                <b className="uper_text poppins-medium">Experience Inclusivity:</b>
                               <p className="peragraph">Be part of a supportive community that values every member and fosters a welcoming environment.</p>
                            </li>
                        </ul>
                    </div>

                    <img className="glo-img" src={img} alt="mobile"/>

                    <div className="item1">
                        <h4 className="poppins-semibold">Join Our Exclusive Club
                            <i class="fa-solid fa-arrow-right"></i>
                        </h4>

                        <ul>
                            <li>
                                <span className="check_box">
                                    <i class="fa-solid fa-check"></i>
                                </span>
                                <b className="uper_text poppins-medium">Access Exclusive Benefits:</b>  
                               <p className="peragraph">Enjoy unique privileges and personalized support, with exclusive opportunities tailored to enhance your experience.</p>
                            </li>
                            <li>
                                <span className="check_box">
                                    <i class="fa-solid fa-check"></i>
                                </span>
                                <b className="uper_text poppins-medium">Network with Influencers:</b>
                               <p className="peragraph"> Connect with industry leaders and build valuable relationships with pioneers.</p>
                            </li>
                            <li>
                                <span className="check_box">
                                    <i class="fa-solid fa-check"></i>
                                </span>
                                <b className="uper_text poppins-medium">Make a Positive Impact:</b>
                               <p className="peragraph">Contribute to meaningful causes and support initiatives that drive positive change.</p>
                            </li>
                        </ul>
                    </div>
               </div>

               <a href="#" className="joinow_btn poppins-semibold">Join Now</a>
            </div>
        </section>
    </>

  )
}

export default Global