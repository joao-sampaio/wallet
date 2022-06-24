// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  // total: 0,
  // currency: 'BRL',
  currencies: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  if (type === 'getCurrencies') {
    const data = payload.currencies;
    // const asArray = Object.keys(data);
    // const obj = asArray.filter((c) => c !== 'USDT');
    // const currencies = Object.fromEntries(obj);
    const currencies = Object.keys(data).filter((c) => c !== 'USDT');
    return {
      currencies,
    };
  }
  return state;
}

export default walletReducer;
