import React from 'react';

export function Footer(props) {
  return (
    <div style={FooterStyle()}>
      <div className="container">
        <div style={FooterTextStyle()}>
          Copyright © 2019 Nigel Cheok. All rights reserved.
        </div>
      </div>
    </div>
  );
}

function FooterStyle() {
  return {
    width: '100%',
    backgroundColor: 'rgb(248, 248, 248)',
    padding: '30px 0',
  }
}

function FooterTextStyle() {
  return {
    color: 'rgb(142, 142, 143)',
    textAlign: 'center',
  }
}