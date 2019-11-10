import React, { Component } from 'react';
import './style.scss';
import MortgageInputForm from './components/MortgageInputForm';
export default class App extends Component {
  render() {
    return (
      <div>
        <MortgageInputForm />
      </div>
    );
  }
}
