import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  height: 700px;
`;

export const BoxTitleAndIcon = styled.View`
 margin-top: 40px;
 width: 280px;
 height: 60px;
 flex-direction: row;
 align-items: center;
`;


export const BoxIconExit = styled.TouchableOpacity`
  margin-top: -30px;
  left: 240px;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 5px;
  margin-left: 15px;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  color: #707070;
`;

export const BoxInternalCart = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  flex: 1;
`;

export const BoxPriceTotal = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  flex: 1;
`;

export const TextCart = styled.Text`
  margin-top: 5px;
  margin-left: 15px;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  color: #707070;
`;

export const TextTotalCart = styled.Text`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 20px;
  font-style: italic;
  font-weight: normal;
  color: #707070;
`;

export const TextPriceCart = styled.Text`
  margin-top: 5px;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #707070;
`;
export const ScrollView = styled.ScrollView``;

export const ButtonSave = styled.TouchableOpacity`
  margin-bottom: 50px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #EBEBEB;
  height: 80px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 15px;
`;

export const TextButton = styled.Text`
 font-style: italic;
 font-weight: bold;
 font-size: 35px;
 margin-right: 10px;
`;

