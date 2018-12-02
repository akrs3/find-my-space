var FirebaseManager = {
    _userData: null,
    _userDataCallback: [],
    
    init() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase
                .database()
                .ref("/user/" + user.uid)
                .once("value")
                .then(result => {
                    if (result.val) {
                        var value = result.val();
                        this._userData = value;
                    } else {
                        this._userData = null;
                    }
                    this._userDataCallback.forEach(cb => {
                        cb(this._userData);
                    });
                });
            } else {
                this._userData = null;
                this._userDataCallback.forEach(cb => {
                    cb(this._userData);
                });
            }

            
        });
    },

    loginWithEmail(email, password) {
        if(this._userData) {
            console.error("User already logged. Please logout before login");
            return new Promise((resolve, reject) => {
                reject();
            })
        } else {
            return firebase.auth().signInWithEmailAndPassword(email, password);
        }
    },

    logout() {
        return firebase.auth().signOut();
    },

    registerUserDataChangedEvent(cb) {
        this._userDataCallback.push(cb);
        cb(this._userData);
    }
}