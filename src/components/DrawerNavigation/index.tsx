
import React, { useEffect, useState } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import IconZocial from 'react-native-vector-icons/Zocial';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {
  Container, BoxIconExit, Title,
  BoxTitleAndIcon, ScrollView, BoxInternalCart, ButtonSave,
  BoxPriceTotal, TextPriceCart, TextCart, TextTotalCart, TextButton
} from './styles';
import Account from '../../pages/Account';
import CardOfIndividualGame from '../../components/CardOfIndividualGame';
import NewBet from '../../pages/NewBet';
import { useSelector, useDispatch } from 'react-redux';
import { IMainReducer } from '../../store/reducers';
import { deleteBetOfCart } from '../../store/actions'
import { Alert } from 'react-native';


interface DrawerProps {
  page: any;
}

interface DrawerCustomProps {
  navigation: any;
  betsInCart: any;
}

const Drawer: React.FC<DrawerProps> = (props) => {
  const { page, route } = props;
  route.state !== undefined ? console.log(route.state.routes[0].params) : null
  // console.log(route.state);
  //console.log(route.state.routes[0].params);
  const DrawerNav = createDrawerNavigator();
  return (
    <DrawerNav.Navigator
      drawerPosition="right"
      drawerContent={(props) => <CustomDrawerComp  {...props} />}>
      <DrawerNav.Screen name="NewBet" component={NewBet} />
    </DrawerNav.Navigator>
  );
}

export default Drawer;


export const CustomDrawerComp = ({ navigation }) => {
  const betRedux = useSelector((state: IMainReducer) => state.betReducer);
  const dispatch = useDispatch();
  // const text = props.navigation.getParams('betsInCart', 'nothing sent');
  // console.log(betRedux.myBets);

  useEffect(() => {
    // console.log(betRedux.myBets)
  }, [betRedux.myBets])


  return (

    <Container>
      <BoxTitleAndIcon>
        <BoxIconExit onPress={() => { navigation.closeDrawer() }}>
          <IconFeather name='x' size={25} color='#B5C300'></IconFeather>
        </BoxIconExit>
        <IconZocial name='cart' size={35} color='#B5C300'></IconZocial>
        <Title>CART</Title>
      </BoxTitleAndIcon>
      <ScrollView>
        <BoxInternalCart>

          {/* {
            betRedux.myBets !== undefined ?
              betRedux.myBets.map((bet: any, index: number) => {
                return (
                  <CardOfIndividualGame onPress={() => dispatch(deleteBetOfCart(bet))} key={index + 1} color={bet.color} numbersSelecteds={bet.numbersSelecteds} price={bet.price} date={bet.date} type={bet.type}
                  ></CardOfIndividualGame>
                )

              })
              : null
          } */}

        </BoxInternalCart>
        <BoxPriceTotal>
          <TextCart>CART</TextCart>
          <TextTotalCart>TOTAL:</TextTotalCart>
          <TextPriceCart>R$ 7,50</TextPriceCart>
        </BoxPriceTotal>

        <ButtonSave onPress={() => (navigation.navigate('SignUp'))}>
          <TextButton style={{ color: '#B5C401', marginLeft: 10 }}>Save</TextButton>
          <IconAnt name='arrowright' size={30} color='#B5C401'></IconAnt>
        </ButtonSave>
      </ScrollView>

    </Container >


  );
};

