import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../route/navigate/types";

type Props = NativeStackScreenProps<RootStackParamList, "FullInfo">;

const FullInfoPage = ({ navigation, route }: Props) => {
  const loadScene = () => {
    navigation.navigate("Main");
  };
  if (route.params === undefined) {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>No data available</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.main}>
        <Image source={{ uri: route.params.urls.full }} style={styles.image} />
        <Pressable style={styles.escButton} onPress={loadScene}>
          <Ionicons name="close" color={"black"} size={35} />
        </Pressable>
      </View>
    );
  }
};

export default FullInfoPage;
