import 'firebase/compat/database';
import config from 'app/services/firebaseService/firebaseServiceConfig';
import firebase from 'firebase/compat/app';

firebase.initializeApp(config);

export const getOrgData = async () => {
    if (!firebase.apps.length) {
        return false;
    }
    return new Promise((resolve, reject) => {
        firebase.database()
            .ref(`PentList/`)
            .once('value')
            .then((snapshot) => {
                const data = snapshot.val();
                console.log(data);
                return data;
            });
    });
};



