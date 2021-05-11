import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color:#F7F7F7;
  justify-content: center;
  align-items: center;
`;


export const TextLogo = styled.Text`
  font-size: 44px;
  font-weight: bold;
  font-style: italic;
  color: #707070;
`;

export const MarkupLogo = styled.View`
  background-color: #B5C401;
  height: 7px;
  width: 90px;
  border-radius: 10px;
`;

export const TitleTypeOfCard = styled.Text`
margin-top: 30px;
 font-style: italic;
 font-weight: bold;
 font-size: 40px;
 color: #707070;
`;


export const BoxButtonCard = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-around;
  align-items: center;
  left: 80px;
  height: 50px;
  width: 150px;
`;

export const TextCopyright = styled.Text`
top: 100px;
 font-style: italic;
 font-weight: normal;
 font-size: 16px;
 color: #C1C1C1;
`;


export const ContainerTypeOfCard = styled.View`
    align-items: center;
    width: 310px;
    height: 500px
`;

export const Button = styled.TouchableOpacity`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: auto;
`;


export const TextButton = styled.Text`
 font-style: italic;
 font-weight: bold;
 font-size: 35px;
 margin-right: 5px;
`;


export const BoxForgetPassword = styled.TouchableOpacity`
  margin-top: 30px;
  width: 160px;
  height: 25px;
  align-items: center;
  left: 120px;
`;

export const TextForgetPassword = styled.Text`
  font-size: 16px;
  color: #C1C1C1;
  font-weight: normal;
  font-style: italic;
`;

export const TextInput = styled.TextInput`
 margin-left: 40px;
 font-style: normal;
 font-size: 15px;
 height: 30px;
 width: 200px;
 color: #9D9D9D;
`;

export const BoxIconEye = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: -50px;
  left: 260px;
  height: 35px;
  width: 35px;
`;

