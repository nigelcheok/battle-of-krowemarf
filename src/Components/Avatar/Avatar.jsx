import React from 'react';

export function Avatar(props) {
  return (
    <div className="card border-square mt-3" style={AvatarStyle()}>
      <div className="card-body">
        <img src={props.avatarUrl} style={AvatarImageStyle()} height="60" width="60"/>
        <div className="mt-2" style={AvatarTitleStyle()}>
          { props.name }
        </div>
        <div style={AvatarDescriptionStyle()}>
          { props.description }
        </div>
      </div>
    </div>
  );
};

function AvatarStyle() {
  return {
    minWidth: '360px',
    backgroundColor: 'rgba(37,39,41,.01)',
    textAlign: 'center',
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