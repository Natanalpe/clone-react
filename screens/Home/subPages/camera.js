import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Camera } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Container, ButtonCamera} from '../style'

const camera = ({ navigation }) => {



  return (
    <Container>
      <Camera 
        style={styles.cameraStyle}
          type={Camera.Constants.Type.front}
          >
          
        </Camera>
        <TouchableOpacity>
          <FontAwesome 
          style={styles.takePictureIcon} name="camera" size={25} color="white" />
        </TouchableOpacity>
        <Button title="voltar"
        onPress={() => {
           navigation.navigate('Home')
        }}
        >
        </Button>
    </Container>
  )
}
const styles = StyleSheet.create({
  takePictureIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: '75vh',
    alignSelf: 'center'
    
  },
  cameraStyle: {
    margin: 0,
    padding: 0
  }
})

export default camera;