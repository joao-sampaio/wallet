import React from 'react';
import { Redirect } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isLogged: false,
  };

  handleChange = async ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  buttonDisable = () => {
    const { email, password } = this.state;
    const test = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      .test(email);
    const MIN = 6;
    return !(test && password.length >= MIN);
  }

  onclick = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const test = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      .test(email);
    const MIN = 6;
    this.setState({ isLogged: (test && password.length >= MIN) });
    const { dispatch } = this.props;
    dispatch({ type: 'email', payload: { value: email } });
  };

  render() {
    const { isLogged } = this.state;
    const { handleChange, buttonDisable } = this;
    return (
      <div>
        {isLogged === true ? <Redirect to="/carteira" /> : (
          <>
            <input
              name="email"
              data-testid="email-input"
              type="email"
              onChange={ handleChange }
            />
            <input
              name="password"
              data-testid="password-input"
              type="password"
              minLength="6"
              onChange={ handleChange }
            />
            <button
              disabled={ buttonDisable() }
              onClick={ this.onclick }
              type="button"
            >
              Entrar
            </button>
          </>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// export default Login;
export default connect()(Login);
