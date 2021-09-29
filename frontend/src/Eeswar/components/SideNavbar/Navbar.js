import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
import './Navbar.css';
import { IconContext } from 'react-icons';
import axios from "axios"
import * as CgIcons  from "react-icons/cg";
import Logo from "../../../Jayamini/components/GifteryLogo.png"


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
          <div  align="center"><img src={Logo} alt="" style={{ maxWidth: "90px" }} className="mt-4 mb-1" />
          <h5 align="center mt-2"><i className="text-white " align="center">Supplier</i> </h5>
          <div href="/dashboard"><a href="/dashboard" style={{textDecorationLine:"none"}}><span className="text-white align-center" ><i class="fas fa-tachometer-alt mr-4"> </i>  Dashboard</span></a></div>
           </div>
           <hr class=" text-white"/>
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
            <div>
          <h6 className="text-white mt-4"> <a href="/" style={{textDecorationLine:"none"}}>Logout <i class="fas fa-sign-out-alt"></i></a></h6>
            </div>
            <br/>
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
