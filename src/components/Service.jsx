import Service_card from "./Service_card"

const Service = () => {
  return (
    
    <>
        <section className="service">
            <div className="container">
                <div className="ser_headeing">
                    <p className="poppins-bold">Services</p>
                    <h3 className="poppins-bold">What We Offer</h3>
                </div>
                <div className="sns_cirds">
                   
                    <Service_card/>
                    <Service_card/>
           
                </div>
            </div>
        </section>

    </>

  )
}

export default Service