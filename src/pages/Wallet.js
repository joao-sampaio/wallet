import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import store from '../store';

class Wallet extends React.Component {
  state = {
    total: 0,
    currency: 'BRL',
  };

  render() {
    // const state = store.getState();
    const { user: { email } } = this.props;
    console.log(this.props);
    const { total, currency } = this.state;
    // const { wallet: { total, currency } } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <h3 data-testid="header-currency-field">{ currency }</h3>
          <h3 data-testid="total-field">{ total }</h3>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

// export default Wallet;
export default connect(mapStateToProps)(Wallet);
