/* eslint import/no-extraneous-dependencies: off */
import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import history from '@history';
import _ from '@lodash';
import { setInitialSettings, setDefaultSettings } from 'app/store/fuse/settingsSlice';
import { showMessage } from 'app/store/fuse/messageSlice';
import auth0Service from 'app/services/auth0Service';
import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';
import settingsConfig from 'app/fuse-configs/settingsConfig';

export const setUserDataAuth0 = (tokenData) => async (dispatch) => {
  const user = {
    role: ['admin'],
    from: 'auth0',
    data: {
      displayName: tokenData.username || tokenData.name,
      photoURL: tokenData.picture,
      email: tokenData.email,
      settings:
        tokenData.user_metadata && tokenData.user_metadata.settings
          ? tokenData.user_metadata.settings
          : {},
      shortcuts:
        tokenData.user_metadata && tokenData.user_metadata.shortcuts
          ? tokenData.user_metadata.shortcuts
          : [],
    },
  };

  return dispatch(setUserData(user));
};

export const setUserDataFirebase = (user, authUser) => async (dispatch) => {
  if (
    user &&
    user.data &&
    user.data.settings &&
    user.data.settings.theme &&
    user.data.settings.layout &&
    user.data.settings.layout.style &&
    (user.use == 'admin')
  ) {
    // Set user data but do not update
    return dispatch(setUserData(user));
  }


  // Create missing user settings
  return dispatch(createUserSettingsFirebase(authUser));


};
export const createUserSettingsFirebasePent = (authUser) => async (dispatch, getState) => {
  const guestUser = getState().auth.user;
  const fuseDefaultSettings = getState().fuse.settings.defaults;
  // const { currentUser } = firebase.auth();
  const temp = authUser._delegate;
  // console.log(authUser);

  // console.log(temp);
  /**
   * Merge with current Settings
   */
  const user = _.merge({}, guestUser, {
    uid: temp.uid,
    from: 'firebase',
    role: ['Pentester'],
    data: {
      displayName: authUser.displayName,
      email: authUser.email,
      settings: { ...fuseDefaultSettings },
    },
    use: 'Pentester',
  });

  // currentUser.updateProfile(user.data);
  return dispatch(updateUserpentData(user));

};
export const OrgData = (user) => async (dispatch, getState) => {

  console.log(user);
  firebaseService.pushpent({ ...user })
    .then(() => {
      dispatch(showMessage({ message: 'User data saved to firebase' }));
    })
    .catch((error) => {
      dispatch(showMessage({ message: error.message }));
    });
};
export const createUserSettingsFirebase = (authUser) => async (dispatch, getState) => {
  const guestUser = getState().auth.user;
  const fuseDefaultSettings = getState().fuse.settings.defaults;
  const { currentUser } = firebase.auth();
  const temp = authUser._delegate;
  // console.log(authUser);

  // console.log(temp);
  /**
   * Merge with current Settings
   */
  const user = _.merge({}, guestUser, {
    uid: temp.uid,
    from: 'firebase',
    role: ['admin'],
    data: {
      displayName: authUser.displayName,
      email: authUser.email,
      settings: { ...fuseDefaultSettings },
    },
    use: 'CTO'

  });

  dispatch(updateUserData(user));

  return dispatch(setUserData(user));
};

export const setUserData = (user) => async (dispatch, getState) => {
  /*
  You can redirect the logged-in user to a specific route depending on his role
  */
  if (user.use === 'CTO') {
    if (user.loginRedirectUrl) {
      settingsConfig.loginRedirectUrl = user.loginRedirectUrl; // for example 'apps/academy'
    }

    /*
    Set User Settings
    */

    dispatch(setDefaultSettings(user.data.settings));
    dispatch(setUser(user));
  }
};

export const updateUserSettings = (settings) => async (dispatch, getState) => {
  const oldUser = getState().auth.user;
  const user = _.merge({}, oldUser, { data: { settings } });

  dispatch(updateUserData(user));

  return dispatch(setUserData(user));
};

export const updateUserShortcuts = (shortcuts) => async (dispatch, getState) => {
  const { user } = getState().auth;
  const newUser = {
    ...user,
    data: {
      ...user.data,
      shortcuts,
    },
  };

  dispatch(updateUserData(newUser));

  return dispatch(setUserData(newUser));
};

export const logoutUser = () => async (dispatch, getState) => {
  const { user } = getState().auth;

  if (!user.role || user.role.length === 0) {
    // is guest
    return null;
  }

  history.push({
    pathname: '/',
  });

  switch (user.from) {
    case 'firebase': {
      firebaseService.signOut();
      break;
    }
    case 'auth0': {
      auth0Service.logout();
      break;
    }
    default: {
      jwtService.logout();
    }
  }

  dispatch(setInitialSettings());

  return dispatch(userLoggedOut());
};

export const updateUserpentData = (user) => async (dispatch, getState) => {
  if (!user.role || user.role.length === 0) {
    // is guest
    return;
  }
  firebaseService.updatePentData(user)
    .then(() => {
      dispatch(showMessage({ message: 'User data saved to firebase' }));
    })
    .catch((error) => {
      dispatch(showMessage({ message: error.message }));
    });
};

export const updateUserData = (user) => async (dispatch, getState) => {
  if (!user.role || user.role.length === 0) {
    // is guest
    return;
  }
  switch (user.from) {
    case 'firebase': {
      firebaseService
        .updateUserData(user)
        .then(() => {
          dispatch(showMessage({ message: 'User data saved to firebase' }));
        })
        .catch((error) => {
          dispatch(showMessage({ message: error.message }));
        });
      break;
    }
    case 'auth0': {
      auth0Service
        .updateUserData({
          settings: user.data.settings,
          shortcuts: user.data.shortcuts,
        })
        .then(() => {
          dispatch(showMessage({ message: 'User data saved to auth0' }));
        })
        .catch((error) => {
          dispatch(showMessage({ message: error.message }));
        });
      break;
    }
    default: {
      jwtService
        .updateUserData(user)
        .then(() => {
          dispatch(showMessage({ message: 'User data saved with api' }));
        })
        .catch((error) => {
          dispatch(showMessage({ message: error.message }));
        });
      break;
    }
  }
};

const initialState = {
  role: ["CTO"], // guest
  data: {
    displayName: 'John Doe',
    photoURL: 'assets/images/avatars/Velazquez.jpg',
    email: 'johndoe@withinpixels.com',
    shortcuts: ['calendar', 'mail', 'contacts', 'todo'],
  },
  use: 'CTO'
};

const userSlice = createSlice({
  name: 'auth/user',
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
    userLoggedOut: (state, action) => initialState,
  },
  extraReducers: {},
});

export const { setUser, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
