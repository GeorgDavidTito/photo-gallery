# Photo Gallery

#### Note: application tested only on android, on ios it was not tested

## Prerequisites

Follow the [official guide](https://facebook.github.io/react-native/docs/getting-started.html) to properly setup your environment.
We highly recommend using [nvm](https://github.com/creationix/nvm) instead of brew or aptitude to install nodejs.

## Proyect Set Up

### One time setup

#### ENV setup
------------
create the `.env` file on the root.
```
BASE_URL=https://XXXXXXXX

ACCESS_KEY=XXXXXXXXXX

```

Where the `ACCESS_KEY` is the debug url api.

Then create the `.env.production` file on the root too, with the same data that the last,
but the `BASE_URL` must be the production url api.

#### Install dependencies: 

`yarn` or `npm i`
-----------

## Running aplication

--------------------
To run a Android simulator with `development` environment, just run:

`npx react-native start`

ANDROID

`npx react-native run-android`

--------------------

ANDROID
`npx react-native run-android` and then:
1. Command⌘ + M to launch the developer menu in Android emulator.
2. Tap DevSettings.
3. Toggle JS Dev Mode.

--------------------

## Outputs

### Android
Use the the command in the rootpath to generate the APK:
```
npm run android:build

yarn run android:build
```
It will generate the apk file in the path `android/app/build/outputs/apk/app-release.apk`

If you want to test that file in a plugged devise use the command `npm run android:install` to install it.
