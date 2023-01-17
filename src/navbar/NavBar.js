import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { Link} from "@chakra-ui/react";
import './Navbar.css';

const NavBar = ({ accounts, setAccounts}) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if(window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' >
          <button>
            <FaIcons.FaBars onClick={showSidebar} />
          </button>
          <nav>
            <a href="https://discord.gg/FSvTDF72">
              <img src="https://img.icons8.com/color/48/000000/discord-logo.png" alt="" />
            </a>
            <a href="https://twitter.com/labrchain">
              <img src="https://img.icons8.com/fluency/48/000000/twitter.png" alt="" />
            </a>
            <a href="https://www.instagram.com">
              <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="" />
            </a>
          </nav>

          <div>
            {/* Connect */}
            {isConnected ? (
              <button className='btn'
              >Connected</button>) : (
                <button className='btn'
                  onClick={connectAccount}
                >Metamask
                </button>
              )}
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;