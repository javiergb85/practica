import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TopTabNavigator from './TopTabNavigator';
import StackNavigator from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = () => {
  return  Platform.OS === 'ios' ? <TabIos /> : <TabsAndroid />

}



const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid =()=> {
  return (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true} barStyle={{backgroundColor:colores.primary}}
    screenOptions={({route}) => ({
         tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = <Icon name="bandage-outline" size={20} color={color} />;
              break;
            case 'TopTabNavigator':
              iconName = <Icon name="basketball-outline" size={20} color={color} />;
              break;
            case 'Tab3Screen':
              iconName =  <Icon name="alarm-outline" size={20} color={color} />;
              break;
            default:
              break;
          }

        return  <Text style={{color}}>{iconName} </Text>;
        },
      })}
    >
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'tab1'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'tab3'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
}



const BottomTabIOS = createBottomTabNavigator();

const TabIos = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgrondColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },

        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = <Icon name="bandage-outline" size={20} color={color} />;
              break;
            case 'TopTabNavigator':
              iconName = <Icon name="basketball-outline" size={20} color={color} />;
              break;
            case 'Tab3Screen':
              iconName =  <Icon name="alarm-outline" size={20} color={color} />;
              break;
            default:
              break;
          }

        return  <Text style={{color}}>{iconName} </Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'tab1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{title: 'tab2'}}
        component={TopTabNavigator}
      />
        <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'tab3'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};

export default Tabs;
