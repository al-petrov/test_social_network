import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setRedirectAddressAC } from '../redux/auth-reducer';

const mapStateToPropsRedirect = state => {
  return { isAuth: state.auth.isAuth, redierctAddress: state.auth.redierctAddress };
};

export const withAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        this.props.setRedirectAddressAC(this.props.location.pathname);
        return <Redirect to={'/login'} />;
      }
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect, { setRedirectAddressAC })(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};
