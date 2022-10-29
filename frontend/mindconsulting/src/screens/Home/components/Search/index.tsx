import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { ButtonAdd, Container, Input } from "./styles";
import Theme from "../../../../theme/index";
import { ISearch } from "./types";
import { useNavigation } from "@react-navigation/native";

const Search = ({ onChangeText, value }: ISearch) => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder="Pesquisar pelo curso"
      />
      <ButtonAdd onPress={() => navigate("Course", { item: undefined })}>
        <AntDesign name="plus" size={24} color={Theme.colors.green[700]} />
      </ButtonAdd>
    </Container>
  );
};

export default Search;
