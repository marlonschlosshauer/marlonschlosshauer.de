---
slug: "/blog/signing-and-react-native"
type: 'blog'
date: "2022-11-25"
title: "Signing, React Native and the Play Store"
description: "To deploy a React Native app to the Play Store developers have to sign it with a key. How do you get that key? And what do you do if you lose it?"
---

To deploy their app to the Play Store, developers have to generate a `.keystore` file and sign their release with it. The [React Native docs](https://reactnative.dev/docs/signed-apk-android) do a good job explaining the necessary steps.

To summarize, as of right now  (Version `0.70` on macOS) all you have to do is:
1. Navigate to your JDK folder by following the output of `/usr/libexec/java_home`
2. Run `sudo keytool -genkey -v -keystore {NAME}.keystore -alias {ALIAS} -keyalg RSA -keysize 2048 -validity 10000` (with `{NAME}` and `{ALIAS}` replaced, e.g `tippinho.keystore`)
3. Fill out the prompt
4. Place the generated `{NAME}.keystore` file in `/android/app`
5. Add the following to your `~/.gradle/gradle.properties` (with the correct values):
``` gradle
MYAPP_UPLOAD_STORE_FILE={NAME}.keystore
MYAPP_UPLOAD_KEY_ALIAS={ALIAS}
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

Again, check out the [official docs](https://reactnative.dev/docs/signed-apk-android) for up-to-date and more detailed instructions.

# So you lost your keystore, what now?

No big deal - as long as you let Google Play manage your signing key. Assuming that, the steps are straightforward. The React Native docs point you to [this support article](https://support.google.com/googleplay/android-developer/answer/9842756?visit_id=638050049051152094-2056461076&rd=1#reset) which tells you to [go here and follow the instructions](https://support.google.com/googleplay/android-developer/contact/key).

Those instructions being:
1. Generate a new `.jks` file
``` shell
keytool -genkeypair -alias upload -keyalg RSA -keysize 2048 -validity 9125 -keystore keystore.jks
```
2. Generate a `.pem` file from that `.jks`
``` shell
keytool -export -rfc -alias upload -file upload_certificate.pem -keystore keystore.jks  *
```
3. Send it to Google via the form

I left the actual commands **untouched** to point out that Google default to use `upload` as an `alias` (where the React Native Docs default to `my-key-alias`). This means the `.keystore` that you will generate later to sign your app again will need to have that alias, too! So be careful with what you put here. **Always have your aliases match**. Keep in mind that the `gradle.properties` in `~/.gradle/` also references that `alias`!

# What I also learned

- Don't panic! If you have Google Play sign your app you will gain access again (assuming you know your Play login)
- In my experience the support takes less than 24h to reset your key
- Once reset, the new key will become active after an additional 48h
- If you just have the `.perm` file you can't do anything
- If you just have the `.keystore` file you can't do anything
- If you just have the `.jks` all you need to do is generate a new `.keystore` with the same alias
- The initial `.jks` file should be generated from the initial `keytool -genkey` command
- You can't generate a `.jks` from a `.keystore`, don't bother
- I recommend backing up the `~/.gradle/gradle.properties` because you will lose it at some point
- If you haven't already: Checkout [Play App Signing](https://support.google.com/googleplay/android-developer/answer/9842756)

