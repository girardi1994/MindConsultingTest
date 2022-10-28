import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Card from "./components/Card";
import Search from "./components/Search";

import { Container } from "./styles";
import { TypeCourse } from "./types";

const _renderItem = ({ item }: { item: TypeCourse }) => <Card item={item} />;

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [courses, setCourses] = useState<TypeCourse[]>([]);
  const filterByCourse =
    searchValue.length > 0
      ? courses.filter((c) => c.name.toLowerCase().includes(searchValue.toLowerCase()))
      : courses;

  useEffect(() => {
    setTimeout(() => {
      setCourses([
        {
          id: "52fc260-a55c-49ce-9a36-f502d12602",
          name: "Javascript",
          category_id: "4dbd44b6-bec8-4a08-bfaa-bc9bbae2c44b",
          teacher: "Joao da silva",
          description: "melhor curso do brasil",
          image:
            "https://img.freepik.com/fotos-premium/halteres-em-uma-academia-efeito-flare_53419-9742.jpg?w=2000",
          active: true,
          createdAt: "2022-10-27T17:56:47.634Z",
          updateAt: "2022-10-27T17:56:47.634Z",
        },
        {
          id: "52c260-a55c-49ce-9a36-4ef502d122",
          name: "React",
          category_id: "4dbd44b6-bec8-4a08-bfaa-bc9bbae2c44b",
          teacher: "Pedro Junior",
          description: "melhor curso do brasil",
          image:
            "https://img.freepik.com/fotos-premium/halteres-em-uma-academia-efeito-flare_53419-9742.jpg?w=2000",
          active: true,
          createdAt: "2022-10-27T17:56:47.634Z",
          updateAt: "2022-10-27T17:56:47.634Z",
        },
        {
          id: "52fc260-a55c-49ce-9a36-4f502d1202",
          name: "PHP",
          category_id: "4dbd44b6-bec8-4a08-bfaa-bc9bbae2c44b",
          teacher: "Mario",
          description: "melhor curso do brasil",
          image:
            "https://img.freepik.com/fotos-premium/halteres-em-uma-academia-efeito-flare_53419-9742.jpg?w=2000",
          active: true,
          createdAt: "2022-10-27T17:56:47.634Z",
          updateAt: "2022-10-27T17:56:47.634Z",
        },
        {
          id: "52fc260-a55c-49ce-9a36-4ef02d1202",
          name: "Styled Components",
          category_id: "4dbd44b6-bec8-4a08-bfaa-bc9bbae2c44b",
          teacher: "recat Native",
          description: "melhor curso do brasil",
          image:
            "https://img.freepik.com/fotos-premium/halteres-em-uma-academia-efeito-flare_53419-9742.jpg?w=2000",
          active: true,
          createdAt: "2022-10-27T17:56:47.634Z",
          updateAt: "2022-10-27T17:56:47.634Z",
        },
      ]);
    }, 3000);
  }, []);

  return (
    <Container>
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

export default Home;
