

const Contect = () => {
  return (
    <>
        <section className="contact">
                <div className="container">
                        
                            <div className="test_header">
                                <h5>Contact with us</h5>
                                <h3 className="poppins-semibold">Get in Touch with Us</h3>
                                <p className="peragraph">Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in pretium morbi integer sagittis. Eu quam nec egestas .</p>
                            </div>
        
                            <div className="sidebyside">
                              <div className="iner_sec">
                                      <h4 className="poppins-medium">How Can We Help You?</h4>
                                      <p>Lorem ipsum dolor sit amet consectetur. Aliquet consectetur nullam phasellus sit suspendisse.</p>
                                <ul>
                                <li>
                                    <i class="fa-solid fa-envelope"></i>
                                    <span>abc.support@gmail.com</span>
                                </li>
        
                                <li>
                                     <i class="fa-solid fa-phone"></i>
                                     <span> 012345678989</span>
                                </li>
                            </ul>
                                <p className="snd_p"><b>Note:</b> Our dedicated support team is available to assist you with any questions or concerns.</p>
                            </div>
        
    
                        <form className="form_part2">
                             <p className="form_head poppins-medium"> We’re Here to Answer Your Questions</p>

                            <label for="name" className="poppins-semibold">Name</label>
                            <input type="text" name="" id="name"/>   <br/>
                            
                            <label for="email" className="poppins-semibold">Email</label>
                            <input type="email" name="" id="email"/>  <br/>

                            <label for="subject" className="poppins-semibold">Subject</label>
                            <input type="text" name="" id="subject"/>   <br/>

                            <label for="message" className="poppins-semibold">Message</label>
                            <input type="text" name="" id="message"/> 
                            <br/>
                            
                            <button type="submit">Submit  <i class="fa-solid fa-arrow-right"></i>
                            </button>

                        </form>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Contect