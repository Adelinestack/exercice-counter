import React from 'react';

function CreateCounter(props) {
  return (
    <div>
      <button onClick={props.onClick}>+</button>
    </div>
  );
}

export default CreateCounter;
