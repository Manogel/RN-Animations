import React, {useState, useEffect} from 'react';
import {
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
  Dimensions,
  Alert,
} from 'react-native';
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

const {width} = Dimensions.get('window');

export default function User({user, onPress}) {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 50}));
  const [opacity] = useState(new Animated.Value(0));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: offset.x,
      },
    ]),
    onPanResponderRelease: () => {
      console.log(offset.x._value);
      if (offset.x._value < -200) {
        Alert.alert(`Deleted!`);
      }

      Animated.spring(offset.x, {
        toValue: 0,
        bounciness: 10,
      }).start();
    },
    onPanResponderTerminationRequest: () => false,

    onPanResponderTerminate: () => {
      Animated.spring(offset.x, {
        toValue: 0,
        bounciness: 10,
      }).start();
    },
  });

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
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        transform: [
          ...offset.getTranslateTransform(),
          {
            rotateZ: offset.x.interpolate({
              inputRange: [width * -1, width],
              outputRange: ['-50deg', '50deg'],
            }),
          },
        ],
        opacity,
      }}>
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
