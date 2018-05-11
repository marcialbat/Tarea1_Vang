import React from 'react';

const Person = props => {
  return (
    <p>
      im {props.name} and my age is {props.age}
    </p>
  );
};

export default Person;
