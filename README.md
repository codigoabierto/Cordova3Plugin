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

##Notes

If you plan on using this plugin as a starting point for your plugin, be sure to:

- Fork this repo and edit the plugin.xml file and make all the necessary changes, especially to the id and version of the plugin in the &lt;plugin&gt; element of the XML.
- After making the changes, commit and push to your clone so that you can install from your repo.

You can skip all of this but if you install from this repo, the plugins folder of your Cordova project will have a folder named "com.mydomain.myScript" (this name is taken from the id defined in plugin.xml).
