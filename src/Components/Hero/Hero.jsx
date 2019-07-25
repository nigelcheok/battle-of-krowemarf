import React from 'react';

export function Hero(props) {
  return (
    <div>
      {/*<img src={props.image}/>*/}
      <div style={HeroImageStyle(props.image)}>
        <div className="container">
          <div className="d-flex align-items-center" style={OverlayStyle()}>
            <div style={HeadingStyle()}>
              <div className="text-white font-weight-bold">{ props.title }</div>
              <div className="text-white font-size-small font-weight-light">{ props.description }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroImageStyle(imageUrl) {
  return {
    position: 'relative',
    background: `url(${imageUrl}) no-repeat 50% 38%`,
    height: '500px',
    width: '100vw',
    backgroundSize: 'cover',
    // backgroundColor: 'rgba(66,66,66,.4)',
    // backgroundBlendMode: 'multiply',
  }
}

function OverlayStyle() {
  return {
    width: '75%',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0))',
  }
}

function HeadingStyle() {
  return {
    // position: 'absolute',
    // top: '50%',
    fontSize: '4rem',
    letterSpacing: '1px',
    // transform: 'translateY(-50%)',
  }
}

// function
