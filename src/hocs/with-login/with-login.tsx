import * as React from 'react';

interface State {
  email: string;
  password: string;
  isValidEmail: boolean;
  isValidPassword: boolean;
}

interface InjectingProps {
  onLogin: (review: {email: string; password: string}) => void;
}

const withLogin = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Omit<P, keyof InjectingProps>;

  class WithLogin extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        isValidEmail: false,
        isValidPassword: false,
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleEmailChange = this._handleEmailChange.bind(this);
      this._handlePasswordChange = this._handlePasswordChange.bind(this);
    }

    _handleEmailChange(evt) {
      const email = evt.target.value;
      const emailRegEx = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

      const isValidEmail = emailRegEx.test(email);

      this.setState({
        email,
        isValidEmail,
      });
    }

    _handlePasswordChange(evt) {
      const password = evt.target.value;
      const isValidPassword = password.length > 3;

      this.setState({
        password,
        isValidPassword,
      });
    }

    _handleSubmit(evt) {
      const {onLogin} = this.props;
      const {isValidEmail, isValidPassword, email, password} = this.state;

      evt.preventDefault();

      if (isValidEmail && isValidPassword) {
        onLogin({email, password});
      }
    }

    render() {
      const {email, password, isValidEmail, isValidPassword} = this.state;
      const isValid = isValidEmail && isValidPassword;
      const emailError = !isValidEmail && email.length > 0;
      const passwordError = !isValidPassword && password.length > 0;


      return (
        <Component
          {...this.props}
          emailError={emailError}
          passwordError={passwordError}
          isValid={isValid}
          onEmailChange={this._handleEmailChange}
          onPasswordChange={this._handlePasswordChange}
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  return WithLogin;
};

export default withLogin;
