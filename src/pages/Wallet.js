import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencies from '../actions';
// import store from '../store';

class Wallet extends React.Component {
  state = {
    total: 0,
    currency: 'BRL',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  // handleChange = async ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // };

  render() {
    // const state = store.getState();
    const { user: { email }, wallet: { currencies } } = this.props;
    // console.log(this.props);
    const { total, currency } = this.state;
    // const { wallet: { total, currency } } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <h3 data-testid="header-currency-field">{ currency }</h3>
          <h3 data-testid="total-field">{ total }</h3>
        </header>
        <form>
          <label htmlFor="value">
            Preço:
            <input id="value" name="value" data-testid="value-input" />
          </label>
          <label htmlFor="desc">
            Desccrição:
            <input id="desc" name="desc" data-testid="description-input" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              {currencies.map((c) => <option key={ c }>{ c }</option>)}
            </select>
          </label>
          <label htmlFor="method">
            Método:
            <select id="method" data-testid="method-input">
              <option key="Dinheiro">Dinheiro</option>
              <option key="Cartão de crédito">Cartão de crédito</option>
              <option key="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          {/*  'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde' */}
          <label htmlFor="method">
            Categoria:
            <select id="method" data-testid="tag-input">
              <option key="Alimentação">Alimentação</option>
              <option key="Lazer">Lazer</option>
              <option key="Trabalho">Trabalho</option>
              <option key="Transporte">Transporte</option>
              <option key="Saúde">Saúde</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

// export default Wallet;
export default connect(mapStateToProps)(Wallet);
