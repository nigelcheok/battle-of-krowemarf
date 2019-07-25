import React from 'react';

export function Hero(props) {
  return (
    <div>
      {/*<img src={props.image}/>*/}
      <div style={HeroImageStyle(props.image)}>
        <div style={OverlayStyle()}/>
          <div className="container" style={ContainerStyle()}>
            <div className="position-absolute vertical-align">
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
  }
}

function OverlayStyle() {
  return {
    position: 'absolute',
    height: '500px',
    width: '75%',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0))',
  }
}

function ContainerStyle() {
  return {
    position: 'relative',
    height: '500px',
    width: '100%',
  }
}

function HeadingStyle() {
  return {
    fontSize: '4rem',
    letterSpacing: '1px',
  }
}
