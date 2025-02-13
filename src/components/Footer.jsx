

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <div className="address ">
                    <h3 className="poppins-semibold">Corporate Address & Contact Info</h3>
                    <h6 className="poppins-medium">Company Address</h6>
                    <p id="last_p"> Lorem ipsum dolor sit amet consectetur.\
                         Amet nulla pretium nunc ante tortor.
                         Sapien lacus orci </p>

                         <ul>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                <span><a href="#">abc@gmail.com</a></span>
                            </li>
    
                            <li>
                                 <i class="fa-solid fa-phone"></i>
                                 <span> <a href="#">012345678989</a></span>
                            </li>
                        </ul>

                        <a href="#" className="get poppins-semibold">Get Start</a>
                </div>


                <div className="privacy">
                    <h3 className="poppins-semibold">Logo</h3>
                    <div className="policy poppins-medium">
                        <p className="">Term of service</p>
                        <p className="">Privacy and policy</p>
                    </div>

                     <div className="foot_icon">
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-square-x-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>
                     </div>
                </div>

                <p className="poppins-medium">Copyright © (Year) Borderless Chain LLC. All rights reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer