import img from "../assets/img/Rectangle 4.webp"

const MIssion = () => {
  return (
   
    <>
     <section className=" mission">
        <div className="container">
            <div className="sidebyside">
                <img className="mison_img" src={img} alt="Rectangle"/>
                <div className="mison_stat">
                    <h2 className="statement poppins-bold">Mission Statement</h2>
                    <p className="pera peragraph">Our mission at Borderless Chain is to <span id="unique"> empower individuals and communities</span> by providing a safe, inclusive, and technologically advanced platform. We strive to <span id="unique">bridge cultural gaps</span>, foster social harmony, and <span id="unique">promote economic development</span> through our innovative services.</p>
                </div>
            </div>
        </div>
    </section>
    </>

  )
}

export default MIssion