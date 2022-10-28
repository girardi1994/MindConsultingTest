import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import { ButtonAdd, Container, Input } from "./styles";
import Theme from "../../../../theme/index";
import { ISearch } from "./types";

const Search = ({ onChangeText, value }: ISearch) => {
  return (
    <Container>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder="Pesquisar pelo curso"
      />
      <ButtonAdd>
        <AntDesign name="plus" size={24} color={Theme.colors.green[500]} />
      </ButtonAdd>
    </Container>
  );
};

export default Search;
