import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;


export const MarkupIconHome = styled.View`
  left:10px;
  top: 748px;
  width: 50px;
  height: 6px;
  background-color: #B5C300 ;
  position: absolute;
`;

export const ButtonShowCart = styled.TouchableOpacity`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  background-color: #B5C300;
  justify-content: center;
  align-items: center;
  border-width: 3px;
  border-color: #fff;
  box-shadow: 0px 0px 3px gray;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  font-style: italic;
  box-shadow: 0px 0px 3px gray;
  margin-bottom: 30px;
`;

export const BoxButtonCart = styled.View`
  width: 100px;
  margin-right: 20px;
  justify-Content: center;
  align-items: center;
  box-shadow: 0px 0px 3px gray;
`;

export const BoxAvatar = styled.View`
  margin-top: 30px;
  width: 200px;
  max-height: 200px;
  border-radius: 100px;
  background-color: white;
  flex: 1;
  box-shadow: 0px 0px 3px gray;
`;
export const Avatar = styled.Image`

`;

export const BoxButtonCard = styled.TouchableOpacity`
margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  margin-bottom: 50px;
`;


export const Button = styled.TouchableOpacity`
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

export const ActivityIndicator = styled.ActivityIndicator`
margin-bottom: 30px;
margin-top: 10px;
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

export const BoxButtonSave = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BoxCameraOrGalery = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 200px;
`;


export const BoxIconCameraOrGalery = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  flex:1;
`;
