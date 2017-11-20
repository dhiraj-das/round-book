import firebase from 'react-native-firebase';

function signInUser(email, password, callback) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => callback(user, null))
        .catch(error => callback(null, error));
}

function currentUser(callback) {
    firebase.auth().onAuthStateChanged(user => callback(user));
}

export { signInUser, currentUser };