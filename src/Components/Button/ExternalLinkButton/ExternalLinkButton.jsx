import React from 'react';

export function ExternalLinkButton(props) {
  return (
    <a id={props.id} href={props.link} target="_blank" rel="noopener noreferrer">
      <button type="button" className="btn text-primary">
        <div className={`fab ${props.icon} mr-2`}/>
        <div className="underline-on-hover display-inline-block">{ props.text }</div>
      </button>
    </a>
  );
}