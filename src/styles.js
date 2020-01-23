import styled from 'styled-components/native';
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: ${Platform.OS === "ios" ? 40 : 20}px 15px 0 15px;
  background: #2e93e5;
  height: 200px;
`;

export const HeaderImage = styled.Image`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  background-color: transparent;
  position: absolute;
  left: 15px;
  bottom: 20px;
`;

