var FirebaseUserData = null;

class FirebaseManagerClass {    
    constructor () {
        console.log("created")

        this.waitingInfo = true;

        this.database = firebase.database();
        this.registerOnPlayerAuthStateChanged(this._updateAuthData);
    }

    _makePath(arg) {
        let firebasePath = "";
        if( Array.isArray(arg)) {
            firebasePath = this._makePathWithArray(arg);
        } else {
           firebasePath = arg;
        }
        return firebasePath;
    }
    _makePathWithArray(args) {
        let firebasePath = "";
        for(let i = 0; i < args.length; i ++) {
            if(i > 0) {
                firebasePath += "/";
            }
            if(Array.isArray(args[i])) {
                return firebasePath + this._makePathWithArray(args[i]);
            }

            firebasePath += args[i];
        }
        return firebasePath;
    }
    setUserBase(userBase) {
        FirebaseDataPath.setUserBase(userBase);
    }
    logout() {
        firebase.auth().signOut();
        FirebaseUserData = null;
    }
    getAuthToken() {
        return firebase.auth().currentUser.getIdToken();
    }
    
    signupWithEmail(email, password) {
        this.waitingInfo = true;
        
        let loginFunc = () => {
            return firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                this.getData();
            });
        }
        return this._setAuthPersistence(loginFunc);
    }

    loginWithEmail (email, password) {
        this.waitingInfo = true;

        let loginFunc = () => {
            return firebase.auth().signInWithEmailAndPassword(email, password);
        }
        return this._setAuthPersistence(loginFunc);
    }
    loginWithUsername (username, password) {
        return this.loginWithEmail(username + FirebaseDataPath.LoginAppend, password);
    }
    loginWithToken (token) {
        this.waitingInfo = true;

        let loginFunc = () => {
            return firebase.auth().signInWithCustomToken(token);
        }
        return this._setAuthPersistence(loginFunc);
    }
    _setAuthPersistence(func) {
        return new Promise((resolve, reject) => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {
                let result = func();
                if(result.then != null) {
                    result.then(() => {
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    })
                } else {
                    resolve();
                }
            })
        })
    }
    registerOnPlayerAuthStateChanged (callback) {
        return firebase.auth().onAuthStateChanged(callback); 
    }
    getUserID(){
        if(FirebaseUserData != null){
            return FirebaseUserData.uid;
        }
        return null;
    }
    getUserData(dataType) {
        if(FirebaseUserData == null && this.waitingInfo) {
            let func = () => {
                return this.getUserData(dataType);
            }
            return this._getWaitingUserPromise(func);
        } else if(FirebaseUserData != null) {
            let firebasePath = this._makePath(dataType);
            return this._getData(`user/${FirebaseUserData.uid}/${firebasePath}`);
        }
    }
    getData(...parameters) {
        if(FirebaseUserData == null && this.waitingInfo) {
            let func = () => {
                return this.getData(...parameters);
            }
            return this._getWaitingUserPromise(func);
        }
        let firebasePath = this._makePathWithArray(parameters);

        return this._getData(firebasePath);
    }

    setUserDataListener(dataType, callback, listenerType, owner) {
        if(FirebaseUserData == null && this.waitingInfo) {
            let func = () => {
                return this.setUserDataListener(dataType, callback, listenerType, owner);
            }
            return this._getWaitingUserPromise(func);
        } else if(FirebaseUserData != null) {
            return this.setDataListener([ServerData.USERS_BASE, FirebaseUserData.uid, dataType], callback, listenerType, owner);
        }
    }

    setDataListener(dataType, callback, listenerType, owner) {
        let intermediateFunc = (snapshot) => {
            callback(snapshot.val(), owner);
        };
        
        let firebasePath = this._makePath(dataType);
        
        var reference = firebase.database().ref(firebasePath);
        reference.on(FirebaseDataPath.ListenerType[listenerType], intermediateFunc);

        let removeFunc = () => {
            this._removeDataListener(firebasePath, intermediateFunc);
        }

        return removeFunc;
    }
    
    addUserData(dataType, value) {       
        let firebasePath = this._makePath(['user', FirebaseUserData.uid, dataType]);
        return this._getRef(firebasePath).push(value);
    }

    addData(dataType, value) {
        let firebasePath = this._makePath(dataType);
        return this._getRef(firebasePath).push(value);
    }

    setUserData(dataType, value) {
        let firebasePath = this._makePath(['user', FirebaseUserData.uid, dataType]);
        return this._getRef(firebasePath).set(value);
    }

    setData(dataType, value) {
        let firebasePath = this._makePath(dataType);
        return this._getRef(firebasePath).set(value);
    }

    //just call the return value in setDataListener!! do not call this outside this class
    _removeDataListener(firebasePath, callback) {
        var reference = firebase.database().ref(firebasePath);
        reference.off(intermediateFunc);
    }
    //they must be sent with an dataType defined in ServerData followed by a value, serverdata can also be an array to append variable data path, read the code before using it!!
    updatePlayerData(...parameters) {
        if(FirebaseDataPath == null) {
            //cc.log("user is not logged in to make requests");
            return;
        }
        if(FirebaseUserData == null && this.waitingInfo) {
            let func = () => {
                return this.updatePlayerData(...parameters);
            }
            return this._getWaitingUserPromise(func);
        }
        var count = 10;
        let updates = {};
        while(parameters.length > 0 && (count-- > 0)) {
            let dataType = ""; 
            let value = "";
            let nextParameters;
            [dataType, value, ...nextParameters] = parameters;
            parameters = nextParameters;

            let firebasePath = this._makePath(dataType);

            let level = PlayerData.instance.getData(PlayerData.DataEnum.LEVEL);
            updates[`${FirebaseDataPath.usersBase}/${FirebaseUserData.uid}/${level}/${firebasePath}`] = value;
        }
        return firebase.database().ref().update(updates);
    }
    removeUserData(dataType) {
        let firebasePath = this._makePath(dataType);
        let level = PlayerData.instance.getData(PlayerData.DataEnum.LEVEL);
        return this._removeData(`${FirebaseDataPath.usersBase}/${FirebaseUserData.uid}/${level}/${firebasePath}`);
    }
    
    _updateAuthData (user) {
        FirebaseUserData = user;
        this.waitingInfo = false;
    }
    //there should be an time exception here!!!
    _getWaitingUserPromise(func) {
        console.log("waiting");
        let waitPromise = new Promise((resolve, reject) => {
            let waitFunc = () => {
                let ret = func();
                registeredAuth();
                
                if(ret && ret.then) {
                    ret.then((...args) => {
                        resolve(...args);
                    })
                } else {
                    resolve(ret);
                }
            }
            var registeredAuth = this.registerOnPlayerAuthStateChanged(waitFunc);
        })

        return waitPromise;
    }
    getUserInfo(serverData) {
        let userInfoPath = this._getUserInfoPath() + this._makePath(serverData);
        return this._getData(userInfoPath);
    }
    _removeData(path) {
        console.log(`trying to remove path ${path}, just to be sure that it will not remove something wrong... please test first`)
        return this._getRef(path).remove();
        // return new Promise((resolve, reject) => {resolve();})
    }
    _getUserInfoPath() {
        return `user/${FirebaseUserData.uid}/`;
    }
    _getData(path) {        
        return new Promise((resolve, reject) => {
            this._getRef(path).once(`value`)
            .then((result) => {
                if(result.val) {
                    result = result.val();
                } else {
                    result = null;
                }
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            })
        })
    }
    _getRef(path) {
        return firebase.database().ref(path);
    }
}