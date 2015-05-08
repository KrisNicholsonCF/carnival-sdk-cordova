Carnival SDK Cordova Plugin

This repo contains cordova plugins for both iOS and Android as well as a demo app that contains examples of how to use the SDK.

## Installation

`cordova plugin add https://github.com/carnivalmobile/carnival-sdk-cordova.git`

### iOS

Add a preference to your `config.xml` file with your Carnival App key (from [http://app.carnivalmobile.com](http://app.carnivalmobile.com)).

e.g.

```xml
<platform name="ios">
    <preference name="carnival_ios_app_key" value="YOUR_APP_KEY_GOES_HERE" />
</platform>
```

Open your Xcode project, which should be located in the `platforms/ios` directory of your Cordova/Phonegap project and Drag and drop the `Carnival.embeddedframework` into it. The `Carnival.embeddedframework` can be downloaded from the [Carnival iOS SDK repo](https://github.com/carnivalmobile/carnival-ios-sdk/releases).

### Android

Add these preferences to your `config.xml` file with your Carnival App key (from [http://app.carnivalmobile.com](http://app.carnivalmobile.com)) and your Project Number as described in the [Setting Up GCM](http://docs.carnivalmobile.com/sdk/android/current/gcm/) documentation.

e.g.

```xml
<platform name="android">
    <preference name="carnival_android_app_key" value="YOUR_APP_KEY_GOES_HERE"/>
    <preference name="carnival_android_project_number" value="YOUR_PROJECT_NUMBER_GOES_HERE"/>
</platform>
```



### Methods

```js
Carnival.startEngine();
```
Sets the Carnival appKey credentials for this app. This method uses the value of the `carnival_ios_app_key` in your config.xml file.
 
 ```js
Carnival.getTags(
                  function callback(data) {
                    console.log('getTags returned: ' + data);
                  },
                  function errorHandler(err) {
                    console.log('getTags error: ' + err);
                  }
                );
```
Asyncronously gets the tags for Carnival for this Device.

```js
Carnival.setTags(
                  function callback(data) {
                    console.log('setTags returned: ' + data);
                  },
                  function errorHandler(err) {
                    console.log('setTags error: ' + err);
                  },
                  ['EXAMPLE_SET_TAG_1', 'EXAMPLE_SET_TAG_2']
                );
```
Asyncronously sets the tags for Carnival for this Device.


```js
Carnival.showMessageStream();
```
Shows the Carnival Message Stream

```js
Carnival.updateLocation([-41.292322, 174.777888]);
```
Sends a location update to Carnival.
