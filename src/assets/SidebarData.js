import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Coin',
    path: '/assets/pages/Coin',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'NFTs',
    path: '/assets/pages/NFTs',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'P2E',
    path: '/assets/pages/P2E',
    icon: <IoIcons.IoMdPlay />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/assets/pages/Team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/assets/pages/Support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
