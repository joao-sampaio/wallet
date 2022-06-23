import React from 'react';
import store from '../store';

class Wallet extends React.Component {
  render() {
    const state = store.getState();
    const { user: { email } } = state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <h2>{ email }</h2>
      </div>
    );
  }
}

export default Wallet;
