import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ImageCard = styled.View`
  height: 100px;
  margin: 10px 20px;
`;

export const ImageCourse = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  align-items: center;
  margin: 0 20px;
`;

export const Info = styled.View`
  height: 50px;
  flex: 1;
  justify-content: space-between;
  margin-left: 20px;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.sm};
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_sizes.md}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const Description = styled.View`
  margin: 20px 20px;
`;
