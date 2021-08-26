import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
import './Navbar.css';
import { IconContext } from 'react-icons';
import axios from "axios"
import * as CgIcons  from "react-icons/cg";


function Navbar() {
  const access_token = localStorage.getItem('token')
  const[email , setUsername] = useState("")

      let config = {
        headers: {
          'Authorization': 'Bearer ' + access_token
        }
      }
      axios.get( 
          'http://localhost:9999/buyerlogin/post',
          config)
        .then( ( response ) => {
          if(response.data.message){
              alert(response.data.message)  
          }else{   
            setUsername(response.data.user.email)
          }         
        } )
        .catch()


        const SidebarData = [
          {
            title: 'Supplier Details',
            path: `/supplier/${email}` ,
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text'
          },
          {
            title: 'Sell Item',
            path: '/supplier/create',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
          },
          {
            title: 'Products sold',
            path: `/items/${email}`,
            icon: <FaIcons.FaCartPlus />,
            cName: 'nav-text'
          },
          
          
          
        ];


  
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
            <div class="text-white">
                
            </div>
            </li>

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
          </ul>

          <div className="side-menu-footer">
        <div className="avatar">
          <CgIcons.CgProfile/>
          
        </div>
        <div className="user-info">
          <h5>{email}</h5>
          <p></p>
        </div>
      </div>

        </nav>

        
      </IconContext.Provider>

     

    </>

   

    
  );
}

export default Navbar;
