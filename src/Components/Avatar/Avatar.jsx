import React from 'react';

export function Avatar(props) {
  return (
    <a href={props.link} target="_blank">
      <div className="card border-square mt-3 flex-grow-1 mr-3" style={AvatarStyle()}>
        <div className="card-body">
          <img src={props.avatarUrl} style={AvatarImageStyle()} height="60" width="60" alt={props.name}/>
          <div className="mt-2" style={AvatarTitleStyle()}>
            { props.name }
          </div>
          <div style={AvatarDescriptionStyle()}>
            { props.description }
          </div>
        </div>
      </div>
    </a>
  );
};

function AvatarStyle() {
  return {
    minWidth: '350px',
    backgroundColor: 'rgba(37,39,41,.01)',
    textAlign: 'center',
    textDecoration: 'none !important',
    color: 'rgba(37,39,41)'
  }
}

function AvatarImageStyle() {
  return {
    borderRadius: '40px',
  }
}

function AvatarTitleStyle() {
  return {
    fontWeight: '600',
  }
}

function AvatarDescriptionStyle() {
  return {
    fontSize: '.8rem',
  }
}
