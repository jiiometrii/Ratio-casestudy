import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? ((StatusBar.currentHeight) + 20) : 0
  }
});

// taken from https://stackoverflow.com/questions/51289587/how-to-use-safeareaview-for-android-notch-devices