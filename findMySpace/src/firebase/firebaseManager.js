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
    },

    createGroup(groupName, cb) {
      if(!this._userData) return;
      if(!groupName) return;
      var newGroup = firebase.database().ref("/groups/").push();
      var users = firebase.database().ref("/user/");
      users.orderByValue().on("value", function(snapshot) {
        snapshot.forEach(function(data) {
          if(cb.data.name == data.val().data.name){
            newGroup.set({
              name: groupName,
              members: {
                owner: data.key
              }
            });
          }
        });
      });
      firebase.database().ref("/groups/"+newGroup.key+"/members").once("value").then(res => {
        users.child(res.val().owner+"/groups/").push(newGroup.key);
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