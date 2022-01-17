import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  max-width: 100vw;
  max-height: 100vh;
  
`;

export const Title = styled.Text`
  text-align: center;
  
`;

export const Img = styled.Image`
  position: absolute;
  width: 60vw;
  height: 35vh;
  margin-top: -57vh;
  margin-left: 70;
  opacity: .82;
`;

export const Background = styled.Image`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: -2;
`;
export const TextInputNumber = styled.TextInput`
  position: absolute;
  text-align: center;
  background-color: white;
  width: 85vw;
  margin-bottom: 24vw;
  margin-left: 4vh;
  border-radius: 25px;
  
  
`;

export const ButtonEntrar = styled.TouchableOpacity`
  width: 85vw;
  height: 5.5%;
  justifyContent: center;
  alignItems: center;
  borderRadius: 25px;
  margin-left: 4vh;
  backgroundColor: #16c981;
  margin-bottom: -7vw;
`;

export const IncLogo = styled.Image`
  position: absolute;
  width: 17.5vw;
  height: 5vh;
  margin-top: 84vh;
  margin-left: 40.5vw;
`;

export const UseTerms = styled.Text`
  position: absolute;
  color: #5989e3;
  text-decoration: underline #5989e3;
  margin-left: 33vw;
  margin-top: 93vh;
  
`;

export const ImgLine = styled.Image`
  position: absolute;
  width: 89%;
  height: 0.2%;
  background-color: white;
  margin-left: 5.5vw;
  margin-top: 50px;
`;

export const TextAboveLine = styled.Text`
  position: absolute;
  color: white;
  text-align: center;
  margin-top: 85px;
  margin-left: 45%;
`;

export const ImgRick = styled.Image`
  position: absolute;
  width: 43%;
  height: 26%;
  margin-top: 50vh;
  margin-left: 27vw;
`;




