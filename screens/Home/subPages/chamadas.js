import * as React from 'react'
import {View, Text, TouchableOpaciy, Button} from 'react-native';
import {Container} from '../style'

const chamadas = ({ navigation }) => {



  return (
    <Container>
      <Text>
        Nao ha nada aqui!
      </Text>
      <Button title="voltar"
        onPress={() => {
           navigation.navigate('Home')
        }}
        >
        </Button>
    </Container>
      

  )
}
export default chamadas;