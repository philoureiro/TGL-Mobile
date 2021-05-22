import React, { useState, useCallback, useEffect } from 'react';
import FormData from 'form-data';
import * as FileSystem from 'expo-file-system';
import {
  Container, BoxAvatar, BoxButtonCard, Button, TextButton, BoxIconEye,
  TextInput, ActivityIndicator, BoxButtonSave, BoxCameraOrGalery,
  BoxIconCameraOrGalery, Avatar
} from './styles';
import { Image } from 'react-native';
import { Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import BoxInput from '../../components/BoxInput'
import api from '../../services/api'
import { RootState } from '../../store/index'
import { IUserState } from '../../store/reducers'
import { saveDataOfUser } from '../../store/actions'
import Card from '../../components/Card'
import * as ImagePicker from 'expo-image-picker';



interface AccountProps {
  navigation: any
}

interface IImageProps {
  cancelled: boolean,
  height: number,
  type: any,
  uri: string,
  width: boolean,
}

const Account: React.FC<AccountProps> = ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [dataApi, setDataAPI] = useState();
  const dispatch = useDispatch();

  const userRedux = useSelector((state: RootState) => state.userReducer.user);
  const [userImage, SetUserImage] = useState('');
  const [imageGallery, setImageGallery] = useState<IImageProps>();


  const handleClickLogin = useCallback(async () => {
    setLoading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userRedux.token.token}`
        }
      };
      const data = {
        "username": name,
        "email": email,
        "password": password,
        "password_confirmation": password
      }
      await api.put(`/users/${userRedux.id}`, data, config).then(async response => {
        const { id, username, email } = response.data;
        //  console.log('=>response', response.data);
        const userData: IUserState = {
          user: {
            refreshToken: userRedux.refreshToken,
            token: {
              token: userRedux.token.token,
              type: userRedux.token.type,
            },
            email: email,
            id: id,
            username: username,
          }
        }

        await dispatch(saveDataOfUser(userData));
        setLoading(false);
        Alert.alert('Dados alterados com sucesso!');
      })

    } catch (error) {
      setLoading(false);
      console.log(error)
      Alert.alert('Erro ao alterar dados do usuário!');
    }


  }, [name, email, password]);

  const handleClickLibrary = useCallback(async () => {
    try {
      ImagePicker.requestCameraPermissionsAsync();
      let file: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      const config = {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${userRedux.token.token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      if (!file.cancelled) {
        setImageGallery(file);
        console.log(imageGallery)

        const data = new FormData();
        data.append('file', {
          name: userRedux.email,
          uri: imageGallery?.uri
        });

        await api.put(userImage, data, config).then((response) => {
          console.log(response.data)
          Alert.alert('Imagem salva com sucesso.')
          SetUserImage(`http://127.0.0.1:3333/files/${response.data.file}`)
        })
      }

    } catch (error) {
      console.log('=>error', error)
      Alert.alert('Erro ao salvar arquivo.')

    }

  }, [imageGallery])

  const handleClickCamera = useCallback(async () => {
    ImagePicker.requestCameraPermissionsAsync();
    let result: any = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageGallery(result.uri);
    }
  }, [imageGallery])


  useEffect(() => {


    try {

      async function loadingDataOnTheAPI() {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userRedux.token.token}`
          }
        }

        await api.get('files/', config).then((response) => {
          SetUserImage(`http://127.0.0.1:3333/files/${response.data}`)
        })
      }

      loadingDataOnTheAPI();
    } catch (error) {
      console.log('=>error', error)
      Alert.alert('Não foi possível buscar uma imagem.')

    }

  }, [imageGallery?.uri])


  return (
    <>
      <CustomHeader navigation={navigation} />
      <Container>
        <BoxAvatar>
          <Avatar style={{ flex: 1, resizeMode: 'cover', borderRadius: 100 }}
            source={{ uri: userImage }}>
          </Avatar>
        </BoxAvatar>
        <BoxCameraOrGalery>
          <BoxIconCameraOrGalery onPress={() => handleClickCamera()}>
            <IconFont name='camera' size={35} ></IconFont>
          </BoxIconCameraOrGalery>
          <BoxIconCameraOrGalery onPress={() => handleClickLibrary()}>
            <IconFont name='picture-o' size={35} ></IconFont>
          </BoxIconCameraOrGalery>

          {userRedux.email === 'adm@adm.com' ?
            <BoxIconCameraOrGalery onPress={() => navigation.navigate('EditGames')}>
              <IconMat name='database-edit' size={40} style={{ marginTop: -2 }} color={'#B5C401'}></IconMat>
            </BoxIconCameraOrGalery>
            : null
          }
        </BoxCameraOrGalery>



        <Card>
          <BoxInput textLabel='Name'>
            <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setName(text)}></TextInput>
          </BoxInput>
          <BoxInput textLabel='Email'>
            <TextInput autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setEmail(text)}></TextInput>
          </BoxInput>
          <BoxInput textLabel='Password'>
            <TextInput autoCorrect={false} secureTextEntry={secureText} autoCapitalize={'none'} onChangeText={(text) => setPassword(text)}></TextInput>
            <BoxIconEye onPress={() => setSecureText(!secureText)}>
              <IconFont name='eye' size={25} ></IconFont>
            </BoxIconEye>
          </BoxInput>
        </Card>

        {
          loading ?
            <ActivityIndicator size="large" color="#B5C401" /> :
            <BoxButtonCard>
              <Button onPress={() => handleClickLogin()} >
                <TextButton style={{ color: '#B5C401', marginRight: 10 }}>Salvar</TextButton>
                <IconAnt name='arrowright' size={30} color='#B5C401'></IconAnt>
              </Button>
            </BoxButtonCard>

        }
      </Container>
    </>
  );
}

export default Account;
