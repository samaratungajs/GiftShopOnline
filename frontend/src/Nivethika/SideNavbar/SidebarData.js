import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  
  
  {
    title: 'Statistics',
    path: '/revenue',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'View  Revenue',
    path: '/view',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: ' logout',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },

];
