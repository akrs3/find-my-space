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
                        this._userData.uid = user.uid;
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
    },

    createGroup(groupName) {
      if(!this._userData)
      {
        console.error("User not logged");
        return;    
      } 
      if(!groupName){
        console.error("Group Name not provided");
        return;   
      }
      firebase.database().ref("/groups/").push({
        name: groupName,
        members: {
          owner: this._userData.uid
        }
      }).then((groupId) => {
        firebase.database().ref(`/user/${this._userData.uid}/groups`).push(groupId);
      }).catch((error) => {
          console.error(error);
      });
      console.log("rolou");
    },

    getGroups(cb) {
        var userGroups = [];
        for(var id in this._userData.groups){
            firebase
            .database()
            .ref("/groups/" + this._userData.groups[id])
            .once("value")
            .then(result => {
                if (result.val) {
                    userGroups.push(result.val());
                }
            });
        }
        cb(userGroups);
    }
}