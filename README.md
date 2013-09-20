Cordova3Plugin
==============

Plugin that can be used as a starting point for Cordova 3 CLI compatible plugins.

##Installation
You can install this Plugin using the CLI of Cordova 3.0.

    
    cordova plugin add https://github.com/codigoabierto/Cordova3Plugin.git


##Usage

The JavaScript interface of the Plugin only provides an echo method, whose code is the same as the one found in the documentation for Cordova 3.0 Plugin development.

From your JavaScript you can access this method using either:

    myPlugin.echo(yourMessage, successCallback, errorCallback);

or the equivalent:

    window.myPlugin.echo(yourMessage, successCallback, errorCallback);