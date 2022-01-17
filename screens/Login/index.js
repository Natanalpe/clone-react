import * as React from 'react';
import { Text, View, StyleSheet, Linking} from 'react-native';
import { useState, setState} from 'react';
import { TextInputMask } from 'react-native-masked-text';

import { 
  Container,
  Title,
  Img,
  Background,
  //TextInputMask,
  ButtonEntrar,
  IncLogo,
  UseTerms,
  ImgLine,
  TextAboveLine,
  ImgRick
   }from './style'; 
   


const Login = ({ navigation }) => {
  
  
  
  return (
    <Container>
      
        <Background
              source={{uri: 'https://w0.peakpx.com/wallpaper/550/527/HD-wallpaper-whatsapp-paper-black-background-thumbnail.jpg'}}
            />
        <IncLogo 
              source={{uri: 'https://marcas-logos.net/wp-content/uploads/2021/10/meta-logo.png'}} />
        <Img
              source={{uri: 'https://www.ccbeusorocaba.com.br/wp-content/uploads/2020/02/logo-whatsapp-png-transparente17.png'}}
            />
          
       <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          placeholderTextColor={'#000000'}
          keyboardType= 'numeric'
          placeholder="Digíte seu número"
          style={styles.input}
          autoComplete='on'
          keyboardAppearance='dark'
        />

      <ButtonEntrar  title="ENTRAR"
      onPress={() => {
        navigation.navigate('Home');
      }} >
      <Text>
      ENTRAR
      </Text>
      </ButtonEntrar>


      <UseTerms
      onPress={() => Linking.openURL('https://www.whatsapp.com/legal/updates/terms-of-service/?lang=pt_br')}>
  Termos de serviço
</UseTerms>

    </Container>
  )
};

const styles = StyleSheet.create({
  input: {
    position: 'absolute',
    textAlign: 'center',
    height: '5.5%',
    width: '85vw',
    marginLeft: '4vh',
    borderRadius: '25px',
    backgroundColor: 'white',
    marginBottom: '13vw',
    border: '2px solid green',
    fontSize: '14px',
    fontFamily: 'Gill Sans Extrabold, helvetica',
  }
})

export default Login;