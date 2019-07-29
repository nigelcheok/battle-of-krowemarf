import React from 'react';

export function ExternalLinkButton(props) {
  return (
    <a href={props.link} target="_blank">
      <button type="button" className="btn btn-dark font-weight-bold">
        <div className={`fab ${props.icon} mr-2`}/>
        { props.text }
      </button>
    </a>
  );
}
