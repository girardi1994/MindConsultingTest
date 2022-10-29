import { useIsFocused } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { instance } from "../../config/index";
import Card from "./components/Card";
import { Header } from "./components/Header";
import Search from "./components/Search";

import { Container } from "./styles";
import { TypeCourse } from "./types";

const _renderItem = ({ item }: { item: TypeCourse }) => <Card item={item} />;

export const Home = () => {
  const isFocused = useIsFocused();
  const [searchValue, setSearchValue] = useState("");
  const [courses, setCourses] = useState<TypeCourse[]>([]);
  const filterByCourse =
    searchValue.length > 0
      ? courses.filter((c) =>
          c.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : courses;

  const loadCourses = useCallback(async () => {
    const response = await instance.get("courses");
      const isActive = response.data.filter((c: TypeCourse) => c.active);
      const isInactive = response.data.filter((c: TypeCourse) => !c.active);
      setCourses([...isActive, ...isInactive]);
  }, []);

  useEffect(() => {
    if (isFocused) {
      loadCourses();
    }
  }, [isFocused]);

  return (
    <Container>
      <Header />
      <Search value={searchValue} onChangeText={setSearchValue} />
      <FlatList
        data={filterByCourse}
        keyExtractor={(item) => item.id}
        renderItem={_renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{ paddingTop: 20 }}
      />
    </Container>
  );
};
