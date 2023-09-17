import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../route/navigate/AppMainNavigate";

type Props = NativeStackScreenProps<RootStackParamList, "FullInfo">;

const FullInfoPage = ({ navigation, route }: Props) => {
  const loadScene = () => {
    navigation.navigate("Main");
  };
  if (route.params === undefined) {
    return <Text style={styles.title}>Not data</Text>;
  } else {
    return (
      <View style={styles.main}>
        <Pressable style={styles.escButton} onPress={loadScene}>
          <Ionicons name="close" color={"black"} size={35} />
        </Pressable>
        <Image source={{ uri: route.params.urls.full }} style={styles.image} />
      </View>
    );
  }
};

export default FullInfoPage;
