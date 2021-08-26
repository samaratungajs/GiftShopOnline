import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

import Logo from '../../Malith/component/LandingPageComponent/topbar/GifteryLogo.png';
import Nav1 from './nav1';


function Accountant() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);

  return (
   
    <>


     <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

      
       
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
           <img src={Logo} alt="" style={{ maxWidth: "150px" }}  align="center" /><br/>
            
          
            </li>
            <h1 id="accountanttitle">Accountant</h1><hr id="borderline" />
          
        <h6 id="dashboard">  <i class="fa fa-tachometer" aria-hidden="true"></i>    Dashboard</h6> <hr id="borderline"/>
           
            {SidebarData.map((item, index) => {
              return (

                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    {item.title}
                 
                  
                  </Link>
                  
                </li>
              
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
   
    
  );
}

export default Accountant;
