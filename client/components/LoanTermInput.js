import React, { Component } from 'react';

const LoanTermInput = props => {
  const { loan_term, handleChange } = props;
  return (
    <div className="input-group">
      <label>Amortized For</label>
      <div className="radio-group">
        <label className={loan_term === 15 ? 'selected-input' : null}>
          <input type="radio" name="loan_term" value="15" onChange={handleChange} />
          15
        </label>
        <label className={loan_term === 30 ? 'selected-input' : null}>
          <input type="radio" name="loan_term" value="30" onChange={handleChange} />
          30
        </label>
      </div>
    </div>
  );
};

export default LoanTermInput;
