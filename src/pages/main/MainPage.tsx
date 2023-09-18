import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getPhotos } from "../../store/thunk";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamList } from "../../route/navigate/types";
import { useNavigation } from "@react-navigation/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { styles } from "./styles";

const MainPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  let listViewRef: any;
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { photos } = useAppSelector((state) => state.photos);
  const insets = useSafeAreaInsets();
  const offset = Platform.OS === "ios" ? 4 : 20;

  useEffect(() => {
    dispatch(getPhotos(page));
  }, [dispatch, page]);

  return (
    <View style={styles.main}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        ref={(ref) => (listViewRef = ref)}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        style={{
          flex: 1,
        }}
        data={photos}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.id}
            style={styles.item}
            onPress={() => {
              navigation.navigate("FullInfo", item);
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
            }}
          >
            <Image source={{ uri: item.urls.small }} style={styles.image} />
            <Text numberOfLines={2} style={styles.titleItem}>
              {item.description === null
                ? item.alt_description
                : item.description}
            </Text>
            <Text style={styles.author}>Author</Text>
            <Text style={styles.nameAuthor}>{item.user.name}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={[styles.pageConteiner, { bottom: offset + insets.bottom }]}>
        <View style={styles.pageArrowConteiner}>
          <Pressable
            onPress={() => {
              listViewRef?.scrollToOffset({ offset: 0, animated: true });
              setPage(page === 1 ? page : page - 1);
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
            }}
          >
            <Ionicons name="arrow-back" color={"black"} size={35} />
          </Pressable>
          <Text style={styles.pageText}>Page {page}</Text>
          <Pressable
            onPress={() => {
              listViewRef?.scrollToOffset({ offset: 0, animated: true });
              setPage(page + 1);
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
            }}
          >
            <Ionicons name="arrow-forward" color={"black"} size={35} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainPage;
