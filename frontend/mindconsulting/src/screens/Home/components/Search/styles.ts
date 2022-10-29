import styled from "styled-components/native";
import Theme from "../../../../theme/index";

export const Container = styled.View`
  height: 50px;
  margin: 10px 20px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: Theme.colors.white,
})`
  width: 78%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  height: 50px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 20%;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  align-items: center;
  justify-content: center;
`;
