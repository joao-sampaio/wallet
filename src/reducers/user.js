// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case 'email':
    return { email: payload.value };
  default:
    return state;
  }
}

export default userReducer;
