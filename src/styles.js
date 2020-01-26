import styled from 'styled-components/native';
import { Platform, Animated } from 'react-native'

export const Container = styled(Animated.View)`
  flex: 1;
`;

export const Header = styled(Animated.View)`
  padding: ${Platform.OS === "ios" ? 70 : 20}px 15px 0 15px;
  background: #2e93e5;
  align-items: center;
`;

export const HeaderImage = styled(Animated.Image)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const HeaderText = styled(Animated.Text)`
  font-weight: bold;
  color: #fff;
  background-color: transparent;
  position: absolute;
  left: 15px;
  bottom: 20px;
  font-size: 24px;
`;

