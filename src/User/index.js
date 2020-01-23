import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { Container,Thumbnail,
  Content,
  BioContainer,
  Name,
  Description,
  LikeContainer,
  LikeText, } from './styles';

export default function User({ user, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container>
        <Thumbnail source={{uri: user.thumbnail}} />
        <Content>
          <BioContainer>
            <Name>{user.name.toUpperCase()}</Name>
  <Description>{user.description}</Description>

          </BioContainer>
          <LikeContainer>
            <Icon name="heart" size={12} color="#fff" />
  <LikeText>{user.likes}</LikeText>
          </LikeContainer>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
