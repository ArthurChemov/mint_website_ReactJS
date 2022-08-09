import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { Button, Flex, Image, Link} from "@chakra-ui/react";
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
          <Button className='navbar' cursor="pointer" padding="0 20px">
            <FaIcons.FaBars onClick={showSidebar} />
          </Button>
          <Flex>
            <Link href="https://www.discord.com">
              <Image src="https://img.icons8.com/color/48/000000/discord-logo.png" margin="0 15px"/>
            </Link>
            <Link href="https://twitter.com/labrchain">
              <Image src="https://img.icons8.com/fluency/48/000000/twitter.png" margin="0 15px"/>
            </Link>
            <Link href="https://www.instagram.com">
              <Image src="https://img.icons8.com/fluency/48/000000/instagram-new.png" margin="0 15px"/>
            </Link>
          </Flex>

          <Flex justify="flex-end" width="40%">
            {/* Connect */}
            {isConnected ? (
              <Button
                backgroundColor="#ff0000"
                borderRadius="15px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                fontFamily="inherit"
                padding="10px"
                margin="0 15px"
              >Connected</Button>) : (
                <Button
                  backgroundColor="#ff0000"
                  borderRadius="15px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="white"
                  fontFamily="inherit"
                  padding="10px"
                  margin="0 15px"
                  onClick={connectAccount}
                >Metamask
                </Button>
              )}
          </Flex>
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