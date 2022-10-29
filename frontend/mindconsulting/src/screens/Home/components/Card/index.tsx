import { TypeCourse } from "@screens/Home/types";
import { Entypo } from "@expo/vector-icons";
import Theme from "../../../../theme/index";

import React from "react";

import { Container, Content, Image, SubTitle, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { base } from "../../../../config/index";
import { DashboardNavigatorRoutesProps } from "@routes/dashboard.routes";
import theme from "../../../../theme/index";

const Card = ({ item }: { item: TypeCourse }) => {
  const { navigate } = useNavigation<DashboardNavigatorRoutesProps>();

  const handleOpenCard = () => {
    navigate("About", { item });
  };

  const handleEditCourse = () => {
    navigate("Course", { item });
  };

  return (
    <Container
      style={{
        backgroundColor: item?.active
          ? theme.colors.gray[500]
          : "rgba(237, 56, 51, 0.1)",
      }}
      onPress={handleOpenCard}
    >
      <Image
        resizeMode="cover"
        imageStyle={{ borderRadius: 5 }}
        source={{ uri: `${base}files/${item.image}` }}
      />
      <Content>
        <Title>{item.teacher}</Title>
        <SubTitle>{item.name}</SubTitle>
      </Content>
      <TouchableOpacity
        onPress={handleEditCourse}
        style={{
          zIndex: 1,
          height: "100%",
          width: "10%",
          alignItems: "center",
        }}
      >
        <Entypo
          style={{ marginTop: 27 }}
          name="chevron-thin-right"
          size={30}
          color={Theme.colors.gray[300]}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default Card;
