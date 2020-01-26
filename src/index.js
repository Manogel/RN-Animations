import React, { useState, useEffect } from 'react';
import { View, ScrollView, Animated, Platform, Dimensions, PanResponder } from 'react-native';

import { Container, 
  Header,
  HeaderImage,
  HeaderText} from './styles';
import User from './User';
  

export default function src() {
  const { width } = Dimensions.get('window')
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Diego Fernandes",
      description: "Head de programação!",
      avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
      thumbnail:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
      likes: 200,
      color: "#57BCBC"
    },
    {
      id: 2,
      name: "Robson Marques",
      description: "Head de empreendedorismo!",
      avatar: "https://avatars2.githubusercontent.com/u/861751?s=460&v=4",
      thumbnail:
        "https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80",
      likes: 350,
      color: "#E75A63"
    },
    {
      id: 3,
      name: "Cleiton Souza",
      description: "Head de mindset!",
      avatar: "https://avatars0.githubusercontent.com/u/4669899?s=460&v=4",
      thumbnail:
        "https://images.unsplash.com/photo-1506440905961-0ab11f2ed5bc?auto=format&fit=crop&w=400&q=80",
      likes: 250,
      color: "#2E93E5"
    },
    {
      id: 4,
      name: "Robson Marques",
      description: "Head de empreendedorismo!",
      avatar: "https://avatars2.githubusercontent.com/u/861751?s=460&v=4",
      thumbnail:
        "https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80",
      likes: 350,
      color: "#E75A63"
    },
    {
      id: 5,
      name: "Diego Fernandes",
      description: "Head de programação!",
      avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
      thumbnail:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
      likes: 200,
      color: "#57BCBC"
    },
    {
      id: 6,
      name: "Robson Marques",
      description: "Head de empreendedorismo!",
      avatar: "https://avatars2.githubusercontent.com/u/861751?s=460&v=4",
      thumbnail:
        "https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80",
      likes: 350,
      color: "#E75A63"
    },
    {
      id: 7,
      name: "Cleiton Souza",
      description: "Head de mindset!",
      avatar: "https://avatars0.githubusercontent.com/u/4669899?s=460&v=4",
      thumbnail:
        "https://images.unsplash.com/photo-1506440905961-0ab11f2ed5bc?auto=format&fit=crop&w=400&q=80",
      likes: 250,
      color: "#2E93E5"
    },
    {
      id: 8,
      name: "Robson Marques",
      description: "Head de empreendedorismo!",
      avatar: "https://avatars2.githubusercontent.com/u/861751?s=460&v=4",
      thumbnail:
        "https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80",
      likes: 350,
      color: "#E75A63"
    }
  ])
  const [userSelected, setSelected] = useState(null)
  const [userInfoVisible, SetInfoVisible]  = useState(false)
  const [scrollOffset] = useState(new Animated.Value(0))
  const [listProgress] = useState(new Animated.Value(0))
  const [userInfoProgress] = useState(new Animated.Value(0))
  


  function selectUser(user){
    setSelected(user)
    Animated.sequence([
      Animated.timing(listProgress, {
        toValue: 100,
        duration: 300,
      }),
      Animated.timing(userInfoProgress, {
        toValue: 100,
        duration: 500
      })
    ]).start( ()=> {
      SetInfoVisible(true)
    })

    
  }

  function renderDetail() {
    return <User user={userSelected} onPress={()=>{}} />  
  }

  function renderList() {
    return (<Container
      style = {{
        transform: [
          { translateX: listProgress.interpolate({
            inputRange: [0, 100],
            outputRange:[0, width]
          })}
        ]
      }}
    >
      <ScrollView
      scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollOffset }
          } 
        }
      ])}
      >
        {
          users.map(user => (
            <User
              key={user.id}
              user={user}
              onPress={()=> selectUser(user)}
            />
          ))
        }
      </ScrollView>
    </Container>)
  }

  return (
    <Container>
      <Header style={{
        height: scrollOffset.interpolate({
          inputRange: [0, 140],
          outputRange: [200, 90],
          extrapolate: 'clamp'
        })
      }} >
        <HeaderImage source={userSelected ? { uri : userSelected.thumbnail} : null} 
        style={{
          opacity: userInfoProgress.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1]
          })
        }}
        />
        <HeaderText
          style={{
            fontSize: scrollOffset.interpolate({
              inputRange: [120, 140],
              outputRange: [24, 18],
              extrapolate: 'clamp'
            }),
            transform: [{
              translateX: userInfoProgress.interpolate({
                inputRange: [0, 100],
                outputRange: [0, width]
              })
            }]
          }}
        >
          {"RN Animations"}
        </HeaderText>
        <HeaderText 
        style={{
          transform: [{
            translateX: userInfoProgress.interpolate({
              inputRange: [0, 100],
              outputRange: [width * -1, 0]
            })
          }]
        }}
        >
          {userSelected?.name }
        </HeaderText>
      </Header>
      {userInfoVisible ? renderDetail() : renderList()}
    </Container>
  );
}
