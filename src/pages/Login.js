import React from 'react';

class Login extends React.Component {
// state = {
//   email: '',
//   password: '',
// };

  onclick = (e) => {
    e.preventDefault();
    console.log('sodnfoda');
  };

  render() {
    return (
      <div>
        <input data-testid="email-input" type="text" />
        <input data-testid="password-input" type="text" minLength="6" />
        <button onClick={ this.onclick } type="button">Entrar</button>

      </div>
    );
  }
}

export default Login;
