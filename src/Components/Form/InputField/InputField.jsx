import React from 'react';

export function InputField(props) {
  return (
      <input
        type="text"
        className="form-control border-square"
        placeholder="Search for user"
        value={props.queryString}
        onChange={(e) => props.onQueryStringChanged(e.target.value)}
        style={InputFieldStyle()}
      />
  );
}

function InputFieldStyle() {
  return {
    minWidth: '300px'
  }
}