import firebase from 'react-native-firebase';

function createUser(email, password, callback) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => callback(user, null))
        .catch(error => callback(null, error));
}

function signInUser(email, password, callback) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => callback(user, null))
        .catch(error => callback(null, error));
}

function signOut() {
    firebase.auth().signOut();
}

export {createUser, signInUser, signOut};