import React from 'react';
import { CardFooter } from './CardFooter/CardFooter';

export function Card(props) {
  return (
    <div className="card border-square">
      {/*<img src="..." className="card-img-top" alt="...">*/}
        <div className="card-body d-flex" style={CardBodyStyle()}>
          <div className="fab fa-react fa-3x align-self-center mr-3"/>
          <div>
            <h5 className="card-title" style={CardTitleStyle()}>{ props.title }</h5>
            <p className="card-text" style={CardDescriptionStyle()}>{ props.description }</p>
          </div>
          {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
        </div>
      <CardFooter/>
      {/*<div className="card-footer" style={CardFooterStyle()}>*/}
        {/*test*/}
      {/*</div>*/}
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
//
// function CardFooterStyle() {
//   return {
//     borderTop: '0',
//   }
// }
