import firebase from 'react-native-firebase';

function doesWardExist(ward, callback) {
    const wardReference = 'wards';
    const databaseReference = firebase.database().ref(wardReference);

    databaseReference.once('value', (snapshot) => {
        if (snapshot.hasChild(ward)) {
          callback(true);
          return;
        }
        callback(false);
      });
}

export { doesWardExist };