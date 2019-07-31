import React from 'react';
import Logo from '../../Images/wework.png';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" style={NavbarStyle()}>
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={Logo} height="24" style={LogoStyle()} alt="logo"/>
          <span style={BrandTextStyle()}>· Battle of Krowemarf</span>
        </Link>
      </div>
    </nav>
  );
}

function NavbarStyle() {
  return {
    height: '80px',
    borderBottom: '1px solid rgba(37, 39, 41, 0.1)',
  };
}

function LogoStyle() {
  return {
    display: 'inline-block',
    transform: 'translateY(-5px)',
  }
}

function BrandTextStyle() {
  return {
    display: 'inline-block',
    fontSize: '20px',
    fontWeight: '700',
  }
}
