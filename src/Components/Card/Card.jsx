import React from 'react';
import { CardFooter } from './CardFooter/CardFooter';
import { Link } from 'react-router-dom';

export function Card(props) {
  return (
    <Link to={`/${props.clanDetails.clan.clanName.toLowerCase()}`} style={CardStyle()}>
      <div className="card border-square mt-4">
        {/*<img src="..." className="card-img-top" alt="...">*/}
        <div className="card-body d-flex" style={CardBodyStyle()}>
          <div className="align-self-center mr-3 bg-white d-flex justify-content-center position-relative" style={CardIconStyle()}>
            <div className="vertical-align">
              <div
                className={`fab ${props.clanDetails.clan.clanIcon} fa-3x`}
                style={{ color: props.clanDetails.clan.clanColor }}
              />
            </div>
          </div>
          <div>
            <h5 className="card-title mt-1" style={CardTitleStyle()}>{ props.title }</h5>
            <p className="card-text mt-1" style={CardDescriptionStyle()}>{ props.description }</p>
          </div>
          {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
        </div>
        <CardFooter clanDetails={props.clanDetails}/>
      </div>
    </Link>
  );
}

function CardStyle() {
  return {
    textDecoration: 'none',
    color: 'rgb(37,39,41)',
  }
}

function CardBodyStyle() {
  return {
    backgroundColor: 'rgba(37,39,41,.01)',
  }
}

function CardIconStyle() {
  return {
    height: '60px',
    width: '60px',
    borderRadius: '30px',
  }
}

function CardTitleStyle() {
  return {
    fontSize: '1.25rem',
    marginBottom: '0',
  }
}

function CardDescriptionStyle() {
  return {
    fontSize: '.9rem',
    color: 'rgb(142, 142, 143)',
  }
}