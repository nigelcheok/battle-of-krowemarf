import React from 'react';

export function Card(props) {
  return (
    <div className="card border-square">
      {/*<img src="..." className="card-img-top" alt="...">*/}
        <div className="card-body">
          <h5 className="card-title" style={CardTitleStyle()}>{ props.title }</h5>
          <p className="card-text font-weight-bold" style={CardDescriptionStyle()}>{ props.description }</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  );
}

function CardBodyStyle() {
  return {
    backgroundColor: 'rgba(37,39,41,.01)',
  }
}

function CardTitleStyle() {
  return {
    fontSize: '1.25rem',
  }
}

function CardDescriptionStyle() {
  return {
    fontSize: '.9rem',
    color: 'rgb(142, 142, 143)',
  }
}
