import React, { Component } from 'react';

const InputWithAddOn = props => {
  const { lableName, addOnClassName, inputClassName, name, value, handleChange } = props;
  return (
    <div className="input-group">
      <label>{lableName}</label>
      <div className="input-box">
        <div className={addOnClassName}>$</div>
        <input
          className={inputClassName}
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputWithAddOn;
