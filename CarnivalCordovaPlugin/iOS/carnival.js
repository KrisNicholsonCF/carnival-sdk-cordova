function Carnival() {}

// Initialization
Carnival.prototype.startEngine = function() {
    cordova.exec(null, null, "CarnivalCordovaPlugin", "startEngine", []);
};

// Tags
Carnival.prototype.getTags = function(onSuccess, onError) {
    cordova.exec(onSuccess, onError, "CarnivalCordovaPlugin", "getTags", []);
};

Carnival.prototype.setTags = function(onSuccess, onError, newTags) {
    cordova.exec(onSuccess, onError, "CarnivalCordovaPlugin", "setTags", newTags);
};

// Stream
Carnival.prototype.showMessageStream = function() {
    cordova.exec(null, null, "CarnivalCordovaPlugin", "showMessageStream", []);
};

module.exports = new Carnival();