import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  height: 100px;
  flex-direction: row;
`;

export const MarkupGame = styled.View`
  margin-bottom: 15px;
  background-color: green;
  height: 100px;
  width: 7px;
  border-radius: 15px;
`;

export const BoxNumberSelecteds = styled.View`
  flex:1;
  width: 100%;
  margin-left: 20px;
  justify-content: space-around;
  
`;

export const TextNumbers = styled.Text`
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
  color: #868686;
  font-style: italic;
`;

export const TextNameOfGame = styled.Text`
  margin-top: -10px;
  font-size: 15px;
  font-weight: bold;
  color: #868686;
  font-style: italic;
`;

export const TextData = styled.Text`
  font-size: 12px;
  font-weight: normal;
  color: #868686;
  font-style: italic;
`;

export const ButtonTrash = styled.TouchableOpacity`
margin-top:  -30px;
  left: 180px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
