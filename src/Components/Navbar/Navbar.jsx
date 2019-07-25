import React from 'react';
import Logo from '../../Images/wework.png';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" style={NavbarStyle()}>
      <div className="container d-flex align-items-center">
      <a className="navbar-brand" href="#">
        <img src={Logo} height="27"/>
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
  };
}
