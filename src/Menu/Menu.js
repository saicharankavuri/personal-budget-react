import '../App.scss';

import {
    Link
} from "react-router-dom";
  

function Menu() {
  return (
    <div className="menu" aria-label="Main Menu"
    role="navigation" itemScope
    itemType="https://schema.org/SiteNavigationElement"> 
        <ul>
            <li><Link itemProp ="url" to="/">Home</Link></li>
            <li><Link itemProp ="url" to="/about">About</Link></li>
            <li><Link itemProp ="url" to="/login">Login</Link></li>
           
        </ul>
    </div>
  );
}

export default Menu;
