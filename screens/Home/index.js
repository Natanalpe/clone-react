import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {useContext} from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Camera } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
  Container,
  Background,
  CardChatOne,
  CardChatTwo,
  CardChatThree,
  CardChatFour,
  CardChatFive,
  ImgCardOne,
  ImgCardTwo,
  ImgCardThree,
  ImgCardFour,
  ImgCardFive,
  MainTopbar,
  TopPages,
  TextAppName,
  ButtonSair,
  ButtonCamera,
  Conversas,
  TextConversas,
  StatusButton,
  TextStatus,
  TextChamadas,
  ChamadasButton,
  TextDani,
  TextWillian,
  TextAna,
  TextPaulo,
  TextVinicius,
  TextData,
  TextChat

} from './style';

const Home = ({ navigation }) => {
  
  const [data] = useState('12/12/1234');
  const [chat] = useState('bla bla bla');

  return (
    <Container>

      <Background/>

      <ButtonSair title="SAIR"
         onPress={() => {
         navigation.navigate('Login');
      }}>
      <Entypo style={styles.buttonSairIcon} color='#dedede' name='arrow-with-circle-left'
      size={25}/>
      </ButtonSair>

      <MainTopbar styles={styles.mainTopbar}>
        <AntDesign style={styles.searchIcon} size={25} color={'#dedede'} name='search1' />
        <Entypo style={styles.dotsIcon} size={22} color={'#dedede'} name='dots-three-vertical' />

        <TextAppName>
        Whatsapp
        </TextAppName>
        
      </MainTopbar>
      
      <TopPages>
        <ButtonCamera       
         onPress={() => {
           navigation.navigate('camera')
         }}
          >
            <AntDesign name='camera' color='#dedede' size={30} />
          </ButtonCamera>
          <Conversas
          onPress={() => {
           navigation.navigate('Home')
         }}>
            <TextConversas>
              CONVERSAS
            </TextConversas>
            
          </Conversas>
          <StatusButton
          onPress={() => {
           navigation.navigate('status')
         }}>
            <TextStatus>
              STATUS
            </TextStatus>
            
          </StatusButton>

          <ChamadasButton
          onPress={() => {
           navigation.navigate('chamadas')
         }}>
            <TextChamadas>
              CHAMADAS
            </TextChamadas>
            
          </ChamadasButton>
      </TopPages>

      <TouchableOpacity>
        <CardChatOne>
          <ImgCardOne source={{
            uri: 'https://avatars.githubusercontent.com/u/89459609?v=4'
          }}/>
            <TextDani>
              Dani
            </TextDani>
            <TextData>
              {data}
            </TextData>
            <TextChat>
            {chat}
            </TextChat>
        </CardChatOne>
      </TouchableOpacity>

      <TouchableOpacity>
        <CardChatTwo>
          <ImgCardTwo source={{
            uri: 'https://avatars.githubusercontent.com/u/73251848?v=4'
          }}/>
            <TextWillian>
              Willian
            </TextWillian>
            <TextData>
              {data}
            </TextData>
            <TextChat>
            {chat}
            </TextChat>
        </CardChatTwo>
      </TouchableOpacity>

      <TouchableOpacity>
        <CardChatThree>
          <ImgCardThree source={{
            uri: 'https://avatars.githubusercontent.com/u/89466535?v=4'
          }}/>
          <TextAna>
              Ana
            </TextAna>
            <TextData>
              {data}
            </TextData>
            <TextChat>
            {chat}
            </TextChat>
        </CardChatThree>
      </TouchableOpacity>

      <TouchableOpacity>
        <CardChatFour>
          <ImgCardFour source={{
            uri: 'https://avatars.githubusercontent.com/u/89466530?v=4'
          }}/>
          <TextPaulo>
              Paulo
            </TextPaulo>
            <TextData>
              {data}
            </TextData>
            <TextChat>
            {chat}
            </TextChat>
        </CardChatFour>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <CardChatFive>
          <ImgCardFive source={{
            uri: 'https://avatars.githubusercontent.com/u/61471521?v=4'
          }}/>
            <TextVinicius>
              Vinicius
            </TextVinicius>
            <TextData>
              {data}
            </TextData>
            <TextChat>
            {chat}
            </TextChat>
        </CardChatFive>
      </TouchableOpacity>

    </Container>
  )
};

const styles = StyleSheet.create({
  searchIcon: {
    direction: 'rtl',
    marginTop: '1.4vh',
    marginRight: '16vw'
  },
  dotsIcon: {
    direction: 'rtl',
    marginTop: '-4.5vh',
    marginRight: '2vw'
  },
  buttonSairIcon: {
    marginTop: '1.6vh',
    marginLeft: '3.3vw',
  }

  
})

export default Home;