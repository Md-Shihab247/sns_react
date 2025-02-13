import Test_cards from "./Test_cards"
import img1 from "../assets/img/img1.webp"
import img2 from "../assets/img/img2.webp"
import img3 from "../assets/img/img3.webp"
import img4 from "../assets/img/img4.webp"
import img5 from "../assets/img/img5.webp"
import img6 from "../assets/img/img6.webp"
import img7 from "../assets/img/img7.webp"

const Testimonial = () => {


    let nameOne = "Alex, United States"
    let paraOne = `"I was able to find my dream job through Borderless Chain's matchmaking service. It was amazing to connect with professionals from all over the world and discover new opportunities."`

    let nameTwo = "Maria, Brazil"
    // let img2 = "../../public/img/img2.webp"
    let paraTwo = "I met my soulmate on Borderless Chain. It's the best platform for connecting with people who share your values and interests."

    let nameThree = "Chen, China"
    // let img3 = "../../public/img/img3.webp"
    let paraThree = `"I've been using Borderless Chain to share my art with the world. It's been a great way to connect with other artists and build a community."`

    let nameFour = "David, Australia"
    // let img4 = "../../public/img/img4.webp"
    let paraFour = `"Borderless Chain has helped me expand my business network and find new clients. It's a valuable tool for anyone looking to grow their career or business."`

    let nameFive = "Sarah, United Kingdom"
    // let img5 = "../../public/img/img5.webp"
    let paraFive = `"The Affluent Members Club has been a game-changer for my business. I've made valuable connections and learned a lot from other successful entrepreneurs."`

    let nameSix = "Ahmed, Egypt"
    // let img6 = "../../public/img/img7.webp"
    let paraSix = `"I've been able to support several charitable causes through the Affluent Members Club. It's a great way to give back and make a difference."`

    let nameSeven = "Yasmin, India"

    let paraSeven = `"I've attended some amazing events through the club, including a private dinner with a world-renowned philanthropist. It's been an incredible experience."`

    let nameEight = "Kenji, Japan"
    // let img8 = "../../public/img/img1.webp"
    let paraEight = `"The Affluent Members Club has provided me with valuable investment opportunities and financial advice. It's a great resource for anyone looking to grow their wealth."`
 
    let nameNine = "David, Australia"
    // let img9 = "../../public/img/img5.webp"
    let paraNine = `"Borderless Chain has significantly expanded my business network. It's been invaluable for finding new clients and growing my business."`
 
 
    return (
    <>
         <section id="testimonial">
            <div class="container">
                <div class="test_header">
                    <h5>What Our Users & members Say</h5>
                    <h3 class="poppins-semibold">Our Testimonials</h3>
                    <p class="peragraph">Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in
                         pretium morbi integer sagittis. Eu quam nec egestas .</p>
                </div>
                <div class="people">
                   
                    <Test_cards img={img1} name= {nameOne} content= {paraOne}/>
                    <Test_cards img={img2} name= {nameTwo} content= {paraTwo}/>
                    <Test_cards img={img3} name= {nameThree} content= {paraThree}/>
                    <Test_cards img={img4} name= {nameFour} content= {paraFour}/>
                    <Test_cards img={img5} name= {nameFive} content= {paraFive}/>
                    <Test_cards img={img6} name= {nameSix} content= {paraSix}/>
                    <Test_cards img={img7} name= {nameSeven} content= {paraSeven}/>
                    <Test_cards img={img1} name= {nameEight} content= {paraEight}/>
                    <Test_cards img={img5} name= {nameNine} content= {paraNine}/>

                </div>
            </div>


        </section>
    </>
  )
}

export default Testimonial