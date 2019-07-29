import React from 'react';
import { Loader } from '../Loader';

export function CardLoader(props) {
  return (
    <div>
        <div className="card border-square mt-3">
          <div className="card-body d-flex justify-content-center" style={CardLoaderStyle()}>
            <Loader/>
          </div>
        </div>
    </div>
  );
}

function CardLoaderStyle() {
  return {
    backgroundColor: 'rgba(37,39,41,.01)',
    height: '120px',
  }
}
