
import styled from 'styled-components/native';
import { shade } from 'polished';


export const Container = styled.TouchableOpacity`
  display: flex;
  height: 35px;
  justify-content:center;
  align-items: center;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  flex-direction: row;
  &:hover{
        background: ${shade(0.1, '#E2E2E2')};
      }
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 5px;
  margin-right: 5px;
`;