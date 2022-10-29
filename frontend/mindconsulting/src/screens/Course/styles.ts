import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const SelectImage = styled.TouchableOpacity`
  height: 100px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  border: 1px dashed ${({ theme }) => theme.colors.white};
  margin: 0 20px;
  margin-top: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-evenly;
`;

export const AddImage = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_sizes.md};
`;

export const SelectedImage = styled.View`
  height: 100px;
  margin: 0 20px;
  margin-top: 10px;
  border-radius: 5px;
`;

export const ImageBack = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin: 0 20px;
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
  width: 100%;
  height: 45px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  margin-left: 20px;
`;
