import * as React from 'react';

import {Link, Navigate} from 'react-router-dom';

import {AppRoutes, LoginErrorMesseges} from '../../constants';
import withLogin from '../../hocs/with-login/with-login';
import Footer from '../footer/footer';
import Loader from '../loader/loader';

interface Props {
  isAuth: boolean;
  isValid: boolean;
  loading: boolean;
  emailError: boolean;
  passwordError: boolean;
  loginError: boolean;
  onEmailChange: () => void;
  onPasswordChange: () => void;
  onSubmit: () => void;
}

const Login = (props: Props) => {
  const {isAuth} = props;

  if (isAuth) {
    return <Navigate to={AppRoutes.MAIN} replace />;
  }

  const {isValid, emailError, passwordError, loginError, onEmailChange, onPasswordChange, onSubmit, loading} = props;

  return loading ? <Loader /> : (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoutes.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmit}>
          <div className="sign-in__message">
            {emailError && <p>{LoginErrorMesseges.EMAIL}</p>}
            {passwordError && <p>{LoginErrorMesseges.PASSWORD}</p>}
            {loginError && <p>{LoginErrorMesseges.LOGIN_FAILED}</p>}
          </div>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={onEmailChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={onPasswordChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" disabled={!isValid}>Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default withLogin(Login);
