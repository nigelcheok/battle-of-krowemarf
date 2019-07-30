import React from 'react';

export function ExternalLinkButton(props) {
  return (
    <a id={props.id} href={props.link} target="_blank" rel="noopener noreferrer">
      <button type="button" className="btn btn-outline-dark font-weight-bold">
        <div className={`fab ${props.icon} mr-2`}/>
        { props.text }
      </button>
    </a>
  );
}
