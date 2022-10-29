import { Header } from "@components/Header";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { TypeCourse } from "@screens/Home/types";
import React from "react";
import { base } from "../../config/index";
import theme from "../../theme";

import {
  Container,
  Description,
  ImageCard,
  ImageCourse,
  Info,
  Row,
  SubTitle,
  Title,
} from "./styles";

export const About = () => {
  const { params } = useRoute();
  const { item } = params as { item: TypeCourse };

  return (
    <>
      <Header title={item.name} />
      <Container contentContainerStyle={{ paddingBottom: 40 }}>
        <ImageCard>
          <ImageCourse
            borderRadius={5}
            resizeMode="cover"
            source={{ uri: `${base}files/${item.image}` }}
          />
        </ImageCard>
        <Row>
          <AntDesign name="user" size={40} color={theme.colors.green[700]} />
          <Info>
            <Title>Professor</Title>
            <SubTitle>{item.teacher}</SubTitle>
          </Info>
        </Row>
        <Row>
          <AntDesign name="bulb1" size={40} color={theme.colors.green[700]} />
          <Info>
            <Title>Categoria</Title>
            <SubTitle>{item.category}</SubTitle>
          </Info>
        </Row>
        <Description>
          <Title>Descrição</Title>
          <SubTitle
            style={{ marginTop: 10, textAlign: "justify", lineHeight: 24 }}
          >
            {item.description}
          </SubTitle>
        </Description>
      </Container>
    </>
  );
};
