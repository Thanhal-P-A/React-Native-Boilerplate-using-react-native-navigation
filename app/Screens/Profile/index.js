import React from 'react';
import ProfileView from './profileView';
import {connect} from 'react-redux';

import AppStyles from '../../AppStyles';
import * as logoutActions from '../../Action/logoutAction';

function ProfileContainer(props) {
  return ProfileView(props);
}

ProfileContainer.options = {
  topBar: {
    backButton: {
      color: AppStyles.colors.WHITE,
    },
    title: {
      text: 'Profile',
      color: AppStyles.colors.WHITE,
    },
    background: {
      color: AppStyles.colors.PRIMARY,
    },
  },
};

function mapStateToProps(state) {
  return {
    Global: state.globalReducer,
    Login: state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutActions.logout()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
