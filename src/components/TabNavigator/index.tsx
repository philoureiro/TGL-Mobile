import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconSimples from 'react-native-vector-icons/SimpleLineIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconZocial from 'react-native-vector-icons/Zocial';
import MyBets from '../../pages/MyBets'
import NewBet from '../../pages/NewBet'
import Drawer from '../DrawerNavigation';
import { ButtonNewBetTabNavigator, ContainerMainIcon, ContainerSecondIcon } from './styles';
import Account from '../../pages/Account';





interface TabNavigatorProps {
  navigation: any;
}

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC<TabNavigatorProps> = ({ navigation }) => {
  return (

    <>

      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case 'Home':
                return (
                  <>
                    <ContainerSecondIcon style={focused ? { borderColor: '#B5C300' } : { borderColor: 'transparent' }}>
                      <IconSimples name={'home'} size={30}
                        color={focused ? '#B5C300' : '#C1C1C1'} />
                    </ContainerSecondIcon>

                  </>);

              case 'Account':
                return (
                  <>
                    <ContainerSecondIcon style={focused ? { borderColor: '#B5C300' } : { borderColor: 'transparent' }}>
                      <IconZocial name={'persona'} size={30}
                        color={focused ? '#B5C300' : '#C1C1C1'} />
                    </ContainerSecondIcon>

                  </>);
            }
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: '#fff',
          activeTintColor: 'black',
          inactiveTintColor: '#C1C1C1',
          //inactiveBackgroundColor: 'green',
          showLabel: true,
          labelPosition: 'below-icon',
          style: {
            height: 95,
            backgroundColor: 'white',
          },
          labelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            fontStyle: 'italic',
          },

        }}>

        <Tab.Screen name="Home" component={MyBets} />
        <Tab.Screen name="NewBet" component={Drawer} options={() => (
          {
            tabBarIcon: () => (
              <ButtonNewBetTabNavigator >
                <ContainerMainIcon>
                  <IconIonic name={'logo-usd'} size={60} color={'#fff'} ></IconIonic>
                </ContainerMainIcon>
              </ButtonNewBetTabNavigator>
            ), tabBarLabel: ''
          })} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>


    </>
  );

};

export default TabNavigator;
