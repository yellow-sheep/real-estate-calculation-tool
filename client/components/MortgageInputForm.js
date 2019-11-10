import React, { Component } from 'react';
class MortgageInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { homeValue: 0, interestRate: 0, downPayment: 0, amortizedFor: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit} className="form-group">
        <div className="input-group">
          <label>Home Address</label>
          <div className="input-box">
            <input
              type="text"
              name="homeValue"
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
              name="homeValue"
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
              name="interestRate"
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
              name="downPayment"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Amortized For</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="amortizedFor" value="15" onChange={this.handleChange} />
              15
            </label>
            <label>
              <input type="radio" name="amortizedFor" value="15" onChange={this.handleChange} />
              30
            </label>
          </div>
        </div>
        <input type="submit" value="Calculate" className="calculate-btn" />
      </form>
    );
  }
}

export default MortgageInputForm;
