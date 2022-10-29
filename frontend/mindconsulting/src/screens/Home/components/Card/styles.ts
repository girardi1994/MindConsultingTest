import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin: 0 20px;
  border-radius: 5px;
  height: 100px;
  padding: 10px;
  flex-direction: row;
`;

export const Image = styled.ImageBackground`
  width: 80px;
  height: 100%;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 10px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.lg}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  color: ${({ theme }) => theme.colors.gray[100]};
`;
