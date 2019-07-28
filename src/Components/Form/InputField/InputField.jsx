import React from 'react';

export function InputField(props) {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control border-square"
        placeholder="Search for User"
        value={props.queryString}
        onChange={(e) => props.onQueryStringChanged(e.target.value)}
      />
    </div>
  );
}