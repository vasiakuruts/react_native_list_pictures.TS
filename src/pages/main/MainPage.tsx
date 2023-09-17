import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getPhotos } from "../../store/thunk";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamList } from "../../route/navigate/AppMainNavigate";
import { useNavigation } from "@react-navigation/core";

const MainPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  let listViewRef: any;
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { photos } = useAppSelector((state) => state.photos);

  useEffect(() => {
    dispatch(getPhotos(page));
  }, [dispatch, page]);

  return (
    <View style={styles.main}>
      <View style={styles.pageConteiner}>
        <Text style={styles.title}>Home page</Text>

        <View style={styles.pageArrowConteiner}>
          <Pressable
            onPress={() => {
              listViewRef?.scrollToOffset({ offset: 0, animated: true });
              setPage(page === 1 ? page : page - 1);
            }}
          >
            <Ionicons name="arrow-back" color={"black"} size={35} />
          </Pressable>
          <Text style={styles.pageText}>Page {page}</Text>
          <Pressable
            onPress={() => {
              listViewRef?.scrollToOffset({ offset: 0, animated: true });
              setPage(page + 1);
            }}
          >
            <Ionicons name="arrow-forward" color={"black"} size={35} />
          </Pressable>
        </View>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        ref={(ref) => (listViewRef = ref)}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        style={{ marginTop: 30 }}
        data={photos}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.id}
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}
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
    </View>
  );
};

export default MainPage;
