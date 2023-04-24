import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css';


const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Menu className='font-mono'>
      
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/greenpaper">
        Green Paper
      </a>
      <a className="menu-item" href="/buysellnfts">
        Buy/Sell NFTs
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item" href="/oxytoken">
        Oxy Token
      </a>
      
    </Menu>
    </div>
  );
};

export default Sidebar