import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencies from '../actions';
// import store from '../store';

const ALI = 'Alimentação';
const MAX_FLOAT = 2;

class Wallet extends React.Component {
  state = {
    total: 0,
    currency: 'USD',
    id: 0,
    value: 0,
    description: '',
    // exchangeRates: {},
    method: 'Dinheiro',
    tag: ALI,

    expenses: [],
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
    // const { fetchCurrencies } = this;
    // fetchCurrencies();
  }

  // fetchCurrencies = () => {
  //   fetch('https://economia.awesomeapi.com.br/json/all')
  //     .then((response) => response.json())
  //     .then((json) => this.setState({ exchangeRates: json }));
  // }

  handleChange = async ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onclick = async (e) => {
    e.preventDefault();
    const { dispatch, wallet: { currenciesValues } } = this.props;
    await dispatch(fetchCurrencies());
    const { total, currency, id, value, description,
      method, tag, expenses } = this.state;
    const obj = {
      id,
      value,
      description,
      currency,
      tag,
      method,
      exchangeRates: currenciesValues,
    };
    const convert = (parseFloat(value) * parseFloat(currenciesValues[currency].ask));
    this.setState({
      total: total + convert,
      id: id + 1,
      value: 0,
      expenses: [...expenses, obj],
    });
    dispatch({ type: 'setExpenses', payload: { expenses: [...expenses, obj] } });
    // console.log(this.state);
  };

  render() {
    const { user: { email }, wallet: { expenses, currencies } } = this.props;
    // console.log(this.props);
    const { total, value } = this.state;
    const { handleChange } = this;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
          <h3 data-testid="total-field">{ total.toFixed(MAX_FLOAT) }</h3>
        </header>
        <form>
          <label htmlFor="value">
            Preço:
            <input
              onChange={ handleChange }
              type="number"
              id="value"
              name="value"
              data-testid="value-input"
              value={ value }
            />
          </label>
          <label htmlFor="desc">
            Desccrição:
            <input
              onChange={ handleChange }
              type="text"
              id="desc"
              name="description"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select onChange={ handleChange } name="currency" id="currency">
              {currencies.map((c) => <option key={ c }>{ c }</option>)}
            </select>
          </label>
          <label htmlFor="method">
            Método:
            <select
              onChange={ handleChange }
              name="method"
              id="method"
              data-testid="method-input"
            >
              <option key="Dinheiro">Dinheiro</option>
              <option key="Cartão de crédito">Cartão de crédito</option>
              <option key="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          {/*  'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde' */}
          <label htmlFor="tag">
            Categoria:
            <select onChange={ handleChange } name="tag" id="tag" data-testid="tag-input">
              <option key={ ALI }>Alimentação</option>
              <option key="Lazer">Lazer</option>
              <option key="Trabalho">Trabalho</option>
              <option key="Transporte">Transporte</option>
              <option key="Saúde">Saúde</option>
            </select>
          </label>

          <button
            // disabled={ buttonDisable() }
            onClick={ this.onclick }
            type="button"
          >
            Adicionar despesa
          </button>
        </form>
        {console.log(this.props)}
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {console.log(expenses)}
            {expenses.map((e) => (
              <tr key={ e.id }>
                <td>{e.description}</td>
                <td>{e.tag}</td>
                <td>{e.method}</td>
                <td>{parseFloat(e.value).toFixed(2)}</td>
                <td>{e.exchangeRates[e.currency].name.split('/')[0]}</td>
                <td>{parseFloat(e.exchangeRates[e.currency].ask).toFixed(2)}</td>
                <td>
                  {(e.value * parseFloat(e.exchangeRates[e.currency].ask)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {expenses.map((e) => <h3 key={ e.id }>{e.description}</h3>)} */}

      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    currenciesValues: PropTypes.objectOf(PropTypes.object),
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

// export default Wallet;
export default connect(mapStateToProps)(Wallet);
