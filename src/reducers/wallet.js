// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  total: 0,
  currency: 'BRL',
};

function walletReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case 'email':
    return { total: payload.total };
  default:
    return state;
  }
}

export default walletReducer;
