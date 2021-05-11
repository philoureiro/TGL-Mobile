import { SpringUtils } from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  height: 30px;
  width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border-width: 3px;
  margin-right: 10px;
  box-shadow: 0px 0px 1px gray;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
`;

