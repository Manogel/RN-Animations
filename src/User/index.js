import React, {useState, useEffect} from 'react';
import {TouchableWithoutFeedback, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Thumbnail,
  Content,
  BioContainer,
  Name,
  Description,
  LikeContainer,
  LikeText,
} from './styles';

export default function User({user, onPress}) {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 50}));
  const [opacity] = useState(new Animated.Value(0));
  //const [offset, setOffset] = useState(new Animated.ValueXY({x: 0, y: 50}));

  useEffect(() => {
    //animações em paralelo
    Animated.parallel([
      // sprint: efeito bouciness
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 5,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      })
    ]).start()
    
  }, []);

  return (
    <Animated.View
      style={[
        {
          transform: [...offset.getTranslateTransform()],
        },
        {
          opacity
        }
      ]}>
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
    </Animated.View>
  );
}
