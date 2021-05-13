import styled from 'styled-components/native';

export const Container = styled.View`
  height: 45px;
  width: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: #fff;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  border-color: black;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 0px 2px gray;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
`;

export const ButtonExit = styled.TouchableOpacity`
  height: 18px;
  width: 18px;
  position: absolute;
  left: 22px;
  bottom: 26px;
`;

