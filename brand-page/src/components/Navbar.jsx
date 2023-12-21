import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="" />
        </div>
        <ul>
          <li href="">Menu</li>
          <li href="">Location</li>
          <li href="">About</li>
          <li href="">Contact</li>
        </ul>
        <button>Login</button>
        <div className="ham">
          <RxHamburgerMenu />
        </div>
        
      </nav>
    </>
  );
}
export default Navbar;
