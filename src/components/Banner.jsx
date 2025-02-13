import Button from "./Button"
import emoji from "../assets/img/Group 108.webp"
import img from "../assets/img/Cards.webp"

    
    const Banner = () => {
      return (

    <>
        <section className="banner">

        <div className="container">
            <p className="welcome poppins-medium">Welcome to borderless chaine</p>
            <h1 className="heading poppins-bold">Connecting the World. Building a Shared Future.</h1>
          
            <Button style={"sns_com "} content={"SNS & Community"}/>
            <Button style={"member"} content={"Membership Club"}/>
        </div>
        <div className="emoji-parent">
            <img className="emoji" src={emoji} alt="emoji"/>
        </div>


    </section>

     {/* outer_banner  */}

        <div className="test">
            <div className="outer_banner">
                <div className="container">
              <img src={img} alt="Cards"/>
            </div>
        </div>
        </div>
 </>
      )
    }
    
    export default Banner