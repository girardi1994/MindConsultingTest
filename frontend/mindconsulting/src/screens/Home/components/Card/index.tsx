import { TypeCourse } from "@screens/Home/types";
import { Entypo } from "@expo/vector-icons";
import Theme from "../../../../theme/index";

import React from "react";

import { Container, Content, Image, SubTitle, Title } from "./styles";

const Card = ({ item }: { item: TypeCourse }) => {
  return (
    <Container>
      <Image
        resizeMode="cover"
        imageStyle={{ borderRadius: 5 }}
        source={{ uri: item.image }}
      />
      <Content>
        <Title>{item.teacher}</Title>
        <SubTitle>{item.name}</SubTitle>
      </Content>
      <Entypo
        style={{ marginTop: 27 }}
        name="chevron-thin-right"
        size={30}
        color={Theme.colors.gray[300]}
      />
    </Container>
  );
};

export default Card;
