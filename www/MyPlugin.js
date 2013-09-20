var exec = require('cordova/exec');

// Constructor
function MyPlugin(){}

MyPlugin.prototype = {

	echo: function(msg, successCallback, errorCallback){

		exec(successCallback, errorCallback, 'MyPlugin', 'echo', [msg]);

	}
	
}

module.exports = new MyPlugin();