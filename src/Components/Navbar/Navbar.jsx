import React from 'react';
import Logo from '../../Images/wework.png';
// import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" style={NavbarStyle()}>
      <div className="container d-flex align-items-center">
      {/*<a className="navbar-brand" href="/">*/}
        {/*<img src={Logo} height="27"/>*/}
      {/*</a>*/}

      <a className="navbar-brand" href="/">
        <img src={Logo} height="27" style={LogoStyle()} alt="logo"/>
        <span style={BrandTextStyle()}>| Battle of Krowemarf</span>
      </a>

      {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*<span className="navbar-toggler-icon"></span>*/}
      {/*</button>*/}
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
    fontWeight: '600',
  }
}
