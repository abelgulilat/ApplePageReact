import React from 'react'
import Applelogo from "../Assets/Icon/apple.png";
import Searchogo from "../Assets/Icon/cart.png";
import Cartlogo from  "../Assets/Icon/Search.png";
import "../Assets/CSS/Style.css"



const Nav = () => {
  return (
    <div className='nav_bar'>
       <div className='all'>
        <div className='logo'>
                <a href=''> <img src={Applelogo} alt="no apple logo" /></a>
                

            </div>

            <ul className='con'>
            <li><a href="#">Store</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Vision</a></li> 
            <li><a href="#">AirPods</a></li>
            <li><a href="#">TV & Home</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Support</a></li>
            </ul>

            <div className='logo'>

                <a href=''> 
                    <img src={Searchogo} alt='no apple logo' />
                </a>
            </div>
            <div className='logo'>
            <a href=''> 
                <img src={Cartlogo} alt='no apple logo' />
            </a>

            </div>
       </div>

    </div>
  )
}

export default Nav