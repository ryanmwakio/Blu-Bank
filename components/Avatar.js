/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * {Object} props
 * {Number} props.size
 */
export default function Avatar({ size = 50, imageUri }) {
  const [avatarUri, setUserAvatarUri] = useState(null);
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate("profile");

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem("@userAvatar");
        setUserAvatarUri(value);
      } catch (error) {}
    })();
  }, [avatarUri]);
  return (
    <Pressable
      style={[styles.container, { width: size, height: size }]}
      onPress={handlePress}
    >
      {avatarUri && (
        <Image
          resizeMode="cover"
          source={{ uri: avatarUri }}
          style={styles.image}
        />
      )}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 6000,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#008fff",
  },
});
