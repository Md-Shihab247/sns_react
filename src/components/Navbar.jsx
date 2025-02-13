
import Button from './Button'
    
    const Navbar = () => {
      return (

        <nav className="navbar">
        <div className="container">
            <div className="sidebyside">
                    <a href="#">
                        <img className="logo" src="../../public/img/Logo.png" alt="logo"/>
                     </a>
                 <ul className="poppins-medium">
                    <li className="menu_items"><a href="#">Home</a></li>
                    <li className="menu_items"><a href="#">About us</a></li>
                    <li className="menu_items"><a href="#">Mission & vision</a></li>
                    <li className="menu_items"><a href="#">Testimonial</a></li>
                    <li className="menu_items"><a href="#">Join us</a></li>
                    <li className="menu_items"><a href="#">Contact</a></li>
                 </ul>
                 <div className="nav_lang">
                    <Button  style={"lang"} content={"Japanese"}/>
                    <Button style={"get_btn"} content={"Get Start"}/>
                 </div>
            </div>
        </div>
    </nav>

      )
    }
    
    export default Navbar
