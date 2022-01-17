import * as React from 'react';
import { Text, View, StyleSheet, Button, StatusBar, RoutesContainer, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';

import Routes from './routes/index';

import { Card } from 'react-native-paper';


export default function App() {
  return (
          <Routes />
  );
}