import React, { useState } from "react";
import { Header } from "@components/Header";

import {
  AddImage,
  Container,
  Content,
  ImageBack,
  Row,
  SelectedImage,
  SelectImage,
  Title,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TypeCourse } from "@screens/Home/types";
import * as ImagePicker from "expo-image-picker";

import { AntDesign, Feather } from "@expo/vector-icons";
import theme from "../../theme";
import { Alert, TouchableOpacity } from "react-native";
import { InputSignIN } from "@components/Input";
import { Button } from "@components/Button";
import { base, instance } from "../../config/index";
import axios from "axios";
import { extractImage } from "./Utils";
import { DashboardNavigatorRoutesProps } from "@routes/dashboard.routes";

export const Course = () => {
  const { navigate } = useNavigation<DashboardNavigatorRoutesProps>();
  const { params } = useRoute();
  const { item } = params as { item: TypeCourse };
  const [image, setImage] = useState(item?.image ?? null);
  const [teacher, setTeacher] = useState(item?.teacher ?? "");
  const [name, setName] = useState(item?.name ?? "");
  const [category, setCategory] = useState(item?.category ?? "");
  const [description, setDescription] = useState(item?.description ?? "");
  const [active, setActive] = useState(item?.active ?? true);
  const [formDataValues, setFormDataValues] = useState(
    {} as { uri: string; name: string; type: string }
  );
  const showImage =
    image && image.split(":")[0] === "file" ? image : `${base}files/${image}`;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const { name, type, uri } = extractImage(result.uri);
      setImage(uri);
      setFormDataValues({ name, type, uri });
    }
  };

  const sendImage = async () => {
    if (image && image.split(":")[0] !== "file") {
      handleEdit();
      return;
    }
    let formData = new FormData();
    formData.append("avatar", formDataValues);
    await axios
      .post(`${base}avatar`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (item?.id) {
          handleEdit(res.data.url);
        } else {
          handleSubmit(res.data.url);
        }
      })
      .catch((err) => {
        Alert.alert("Erro", "Erro ao cadastra a imagem.");
      });
  };

  const handleEdit = async (url?: string) => {
    try {
      const data = {
        id: item?.id,
        teacher,
        name,
        category,
        description,
        image: url ? url : item?.image,
        active: active,
      };
      await instance.put("courses", data);
      navigate("Home");
    } catch (error) {
      Alert.alert("Erro", "Erro ao editar o curso.");
    }
  };

  const handleSubmit = async (url: string) => {
    try {
      const data = {
        teacher,
        name,
        category,
        description,
        image: url,
      };
      await instance.post("courses", data);
      navigate("Home");
    } catch (error) {
      Alert.alert("Erro", "Erro ao cadastrar o curso.");
    }
  };

  const handleDelete = async () => {
    try {
      await instance.delete(`courses/${item?.id}`);
      navigate("Home");
    } catch (error) {
      Alert.alert("Erro", "Erro ao deletar o curso.");
    }
  };

  return (
    <>
      <Header
        title={item?.id ? "Editar" : "Cadastrar"}
        onPress={() => handleDelete()}
      />
      <Container>
        {!image && (
          <SelectImage onPress={pickImage}>
            <AntDesign name="plus" size={30} color={theme.colors.white} />
            <AddImage>{"ADICIONAR IMAGEM"}</AddImage>
          </SelectImage>
        )}
        {image && (
          <SelectedImage>
            <TouchableOpacity onPress={() => setImage(null)}>
              <ImageBack borderRadius={5} source={{ uri: showImage }} />
            </TouchableOpacity>
          </SelectedImage>
        )}
        <Content>
          <InputSignIN
            style={{ width: "100%", marginTop: 50 }}
            placeholder="Nome do professor"
            value={teacher}
            onChangeText={setTeacher}
          />
          <InputSignIN
            style={{ width: "100%", marginTop: 10 }}
            placeholder="Nome do curso"
            value={name}
            onChangeText={setName}
          />
          <InputSignIN
            style={{ width: "100%", marginTop: 10 }}
            placeholder="Categoria do curso"
            value={category}
            onChangeText={setCategory}
          />
          <InputSignIN
            style={{
              width: "100%",
              marginTop: 10,
              height: 200,
            }}
            placeholder="Descrição"
            multiline
            value={description}
            onChangeText={setDescription}
          />
          <Row onPress={() => setActive(!active)}>
            <Feather
              name={active ? "check-square" : "square"}
              size={40}
              color={active ? theme.colors.green[700] : theme.colors.red[500]}
            />
            <Title>{active ? "Curso ativo" : "Curso inativo"}</Title>
          </Row>
          <Button
            onPress={sendImage}
            style={{ width: "100%", marginTop: 20 }}
            title={item?.id ? "Editar" : "Cadastrar"}
          />
        </Content>
      </Container>
    </>
  );
};
