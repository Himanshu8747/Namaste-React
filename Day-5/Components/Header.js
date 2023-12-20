import { LOGO_URL } from "../constants";

const Header=()=>{
    return(
        <div className="header">
                <div className="img-container">
                    <img alt="logo" src={LOGO_URL}/>
                </div>
                <h1 style={{marginLeft:"20%"}}>Pet Pooja</h1>
            
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;