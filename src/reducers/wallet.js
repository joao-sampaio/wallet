// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  // total: 0,
  // currency: 'BRL',
  currencies: [],
  currenciesValues: {},
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  if (type === 'getCurrencies') {
    const data = payload.currencies;
    // const currenciesNames = Object.keys(data).filter((c) => c !== 'USDT');
    return {
      ...state,
      currencies: Object.keys(data).filter((c) => c !== 'USDT'),
      currenciesValues: data,
    };
  } if (type === 'setExpenses') {
    const { expenses } = payload;
    return {
      ...state,
      expenses,
    };
  }
  return state;
}

export default walletReducer;
