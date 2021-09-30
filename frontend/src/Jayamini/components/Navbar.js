import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Logo from "./GifteryLogo.png";
import { SidebarData1 } from './SidebarData';


function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);

  return (
    <>

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='mnavbar'>
          <Link to='#' className='mmenu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

       

        <nav className={sidebar ? 'mnav-menu active' : 'mnav-menu'}>
          <ul className='mnav-menu-items' onClick={showSidebar}>
         <div  align="center"><img src={Logo} alt="" style={{ maxWidth: "90px" }} className="mt-4 mb-1" />
         {/* <h5 className="mt-1 text-white text-muted">Product Manager</h5> */}
        <h5 align="center mt-2"><i className="text-white " align="center">Product Manager</i> </h5>
         <div href="/managerdash"><a href="/managerdash" style={{textDecorationLine:"none"}}><span className="text-white align-center" ><i class="fas fa-tachometer-alt mr-4"> </i>  Dashboard</span></a></div>
         </div> 
         <hr class=" text-white"/>
         <h6 className="mt-1 text-white text-muted"><strong>Product Management</strong></h6>
         

            {/* <li className='navbar-toggle'>
              
            </li> */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>   
              );
            })}
           <hr class="text-white"/>
            <h6 className="mt-1 text-white text-muted"><strong>Supplier Products</strong></h6>
            {SidebarData1.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>   
              );
            })}
            <h6 className="text-white mt-4" align="center" > <a class="text-white" href="/user/login" style={{ textDecoration: 'none' }}>Log out</a> <i class="fas fa-sign-out-alt"></i></h6>
          </ul>
        </nav>
      </IconContext.Provider>
    </>

    
  );
}

export default Navbar;
