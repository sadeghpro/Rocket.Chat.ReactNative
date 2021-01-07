## Whitelabel

You can see `7a8a122f` commit to change app name, app version and ...

## Run Debug
RocketChat React Native use `yarn`. you can run debug with:
```commandline
yarn install
yarn android-whitelabel YOUR_APP_ID
```
Replace `YOUR_APP_ID`

## Build Release

For release builds you must create a signing certificate:
```commandline
cd android/app
keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
Then set `KEYSTORE_PASSWORD` and `KEY_PASSWORD` on `android/gradle.properties` and execute:
```commandline
npx react-native run-android --main-activity chat.rocket.reactnative.MainActivity --variant=experimentalPlayRelease --appId YOUR_APP_ID
```
Replace `YOUR_APP_ID` with `ir.razavi.payam`