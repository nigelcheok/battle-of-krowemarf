import React, { useEffect, useState } from 'react';

export function Loader() {
  const [isLoading, setLoader] = useState(true);

  useEffect( () => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div>
      { isLoading &&
        <div className="spinner-grow text-secondary" style={LoaderStyle()} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
      { !isLoading &&
        <div className="mt-4" style={LoadingTextStyle()}>Sorry, there's an error loading.</div>
      }
    </div>
  );
}

function LoaderStyle() {
  return {
    width: '5rem',
    height: '5rem',
  }
}

function LoadingTextStyle() {
  return {
    fontSize: '1.25rem',
  }
}
