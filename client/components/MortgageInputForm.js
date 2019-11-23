import React, { Component } from 'react';
import axios from 'axios';
import LoanTermInput from './LoanTermInput';
import InputWithAddOn from './InputWithAddOn';
class MortgageInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home_address: '',
      property_value: 0,
      interest_rate: 0,
      down_payment: 0,
      loan_term: 0,
      monthly_payment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleLoanTermChange = this.handleLoanTermChange.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    try {
      const options = {
        method: 'get',
        url: 'http://localhost:8080/calculate',
        headers: {
          ...this.state
        }
      };
      const res = await axios(options);
      const { monthly_payment } = res.data.data;
      this.setState({ ...this.state, monthly_payment });
    } catch (ex) {
      console.log(ex);
    }
  }
  handleChange(event) {
    const { name, value } = event.target;
    let parsedValue = value;
    if (name != 'home_address') {
      parsedValue = Number(value);
    }
    this.setState({ [name]: parsedValue });
  }

  render() {
    console.log(this.state);
    const {
      home_address,
      property_value,
      loan_term,
      down_payment,
      interest_rate,
      monthly_payment
    } = this.state;
    const ifCalculateDisabled =
      home_address === '' ||
      property_value === 0 ||
      loan_term === 0 ||
      down_payment === 0 ||
      interest_rate === 0;
    const displayMothlyPayment =
      monthly_payment === '' ? '' : `Your monthly payment is $${monthly_payment}`;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="form-group">
          <div className="input-group">
            <label>Home Address</label>
            <div className="input-box">
              <input
                type="text"
                name="home_address"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <InputWithAddOn
            lableName="Home Value"
            addOnClassName="add-on right-flat"
            inputClassName="left-flat"
            name="property_value"
            value={this.state.value}
            handleChange={this.handleChange}
          />
          <div className="input-group">
            <label>Interest Rate</label>
            <div className="input-box">
              <input
                className="right-flat"
                type="text"
                name="interest_rate"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <div className="add-on left-flat">%</div>
            </div>
          </div>
          <InputWithAddOn
            lableName="Down Payment"
            addOnClassName="add-on right-flat"
            inputClassName="left-flat"
            name="down_payment"
            value={this.state.value}
            handleChange={this.handleChange}
          />

          <LoanTermInput handleChange={this.handleChange} loan_term={loan_term} />

          <input
            type="submit"
            value="Calculate"
            className="calculate-btn"
            disabled={ifCalculateDisabled}
          />
        </form>
        <div className="calculated-result">{displayMothlyPayment}</div>
      </React.Fragment>
    );
  }
}

export default MortgageInputForm;
