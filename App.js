import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import ImageViewer from "./Components/ImageViewer";
import ButtonViewer from "./Components/ButtonViewer";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <ButtonViewer
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <ButtonViewer label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
