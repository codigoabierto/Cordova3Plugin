var exec = require('cordova/exec');

// Constructor
function MyPlugin(){}

MyPlugin.prototype = {

	echo: function(msg, successCallback, errorCallback){

		exec(successCallback, errorCallback, 'MyPlugin', 'echo', [msg]);

	}
	
}

//var myPlugin = new MyPlugin();
//module.exports = myPlugin;
module.exports = new MyPlugin();