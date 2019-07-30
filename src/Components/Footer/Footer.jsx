import React from 'react';

export function Footer(props) {
  return (
    <div>
      <div style={FooterStyle()}/>
      <div style={FooterContainerStyle()}>
        <div className="container">
          <div style={FooterContainerTextStyle()}>
            Copyright © 2019 Nigel Cheok. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterStyle() {
  return {
    height: '120px',
  }
}

function FooterContainerStyle() {
  return {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    backgroundColor: 'rgb(248, 248, 248)',
    padding: '30px 0',
  }
}

function FooterContainerTextStyle() {
  return {
    color: 'rgb(142, 142, 143)',
    textAlign: 'center',
  }
}
