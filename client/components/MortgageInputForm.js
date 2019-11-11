import React, { Component } from 'react';
import axios from 'axios';
class MortgageInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home_address: '',
      property_value: 0,
      interest_rate: 0,
      down_payment: 0,
      loan_term: 0,
      checked_for_30: '',
      monthly_payment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  //   handleCheck(event){
  //       this.handleChange(event);

  //   }

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
    const checkedForFifteen = loan_term === 15 ? 'active-term' : '';
    const checkedForThirty = loan_term === 30 ? 'active-term' : '';
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
          <div className="input-group">
            <label>Home Value</label>
            <div className="input-box">
              <div className="add-on right-flat">$</div>
              <input
                className="left-flat"
                type="text"
                name="property_value"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
          </div>
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

          <div className="input-group">
            <label>Down Payment</label>
            <div className="input-box">
              <div className="add-on right-flat">$</div>
              <input
                className="left-flat"
                type="text"
                name="down_payment"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Amortized For</label>
            <div className="radio-group">
              <label>
                <input
                  className="active-term"
                  type="radio"
                  name="loan_term"
                  value="15"
                  onChange={this.handleChange}
                />
                15
              </label>
              <label className={checkedForThirty}>
                <input type="radio" name="loan_term" value="30" onChange={this.handleChange} />
                30
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Calculate"
            className="calculate-btn"
            disabled={ifCalculateDisabled}
          />
        </form>
        <div>{displayMothlyPayment}</div>
      </React.Fragment>
    );
  }
}

export default MortgageInputForm;
