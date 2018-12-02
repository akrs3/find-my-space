var firebaseMananger = {
    _events: [],
    registerEvent(event){
        this._events.push(event);
    },
    callEvents(){
        this._events.forEach(event => {
            event();
        })
    }
}

module.exports = firebaseMananger;