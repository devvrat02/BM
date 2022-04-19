/* eslint import/no-extraneous-dependencies: off */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import config from './firebaseServiceConfig';


class FirebaseService {
  init(success) {
    if (Object.entries(config).length === 0 && config.constructor === Object) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          'Missing Firebase Configuration at src/app/services/firebaseService/firebaseServiceConfig.js'
        );
      }
      success(false);
      return;
    }

    if (firebase.apps.length) {
      return;
    }
    firebase.initializeApp(config);
    this.db = firebase.database();
    this.auth = firebase.auth();
    success(true);
  }

  getUserData = (userId) => {
    if (!firebase.apps.length) {
      return false;
    }
    return new Promise((resolve, reject) => {
      this.db
        .ref(`users/client/${userId}`)
        .once('value')
        .then((snapshot) => {
          const user = snapshot.val();
          resolve(user);
        });
    });
  };


  getOrgData = () => {
    if (!firebase.apps.length) {
      return false;
    }
    return new Promise((resolve, reject) => {
      this.db
        .ref(`PentList/Org`)
        .once('value')
        .then((snapshot) => {
          const user = snapshot.val();
          resolve(user);
        });
    });
  };

  pushpent = (user) => {
    if (!firebase.apps.length) {
      return false;
    }

    // let val = getOrgData();

    // console.log(val);

    return new Promise((resolve, reject) => {
      this.db
        .ref(`PentList/Org`)
        .once('value')
        .then((snapshot) => {
          const data = snapshot.val();
          // resolve(user);
          data.push(user);
          return this.db.ref(`PentList/Org`).set(user);

        });
    })



    // return   this.db.ref(`PentList/Org`).push(user);
  }
  updateUserData = (user) => {
    if (!firebase.apps.length) {
      return false;
    }
    return this.db.ref(`users/client/${user.uid}`).set(user);


  };
  updatePentData = (user) => {
    if (!firebase.apps.length) {
      return false;
    }

    return this.db.ref(`users/pent/${user.uid}`).set(user);


  };
  onAuthStateChanged = (callback) => {
    if (!this.auth) {
      return;
    }
    this.auth.onAuthStateChanged(callback);
  };

  signOut = () => {
    if (!this.auth) {
      return;
    }
    this.auth.signOut();
  };
}

const instance = new FirebaseService();

export default instance;
