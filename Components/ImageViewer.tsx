import React from "react";
import { Image, StyleSheet } from "react-native";

type ImageSource = {
  imageSource?: any;
};

const ImageViewer: React.FC<ImageSource> = ({ imageSource }) => {
  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
