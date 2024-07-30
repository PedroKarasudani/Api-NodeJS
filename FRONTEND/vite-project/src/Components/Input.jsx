import React from 'react';

const Input = ({ type, value, setValue, name, ...props }) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    />
  );
};

export default Input;
