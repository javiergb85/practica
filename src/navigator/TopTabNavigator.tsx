import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();



const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{backgroundColor: 'white'}} 
      screenOptions={({route}) => ({
        pressColor: colores.primary,
        showIcon: false,
      
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 8,
        },
      
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = <Text> <Icon name="chatbubbles-outline" size={20} color={colores.primary} /></Text>;
              break;
            case 'ContactScreen':
              iconName =   <Text> <Icon name="people-outline" size={20} color={colores.primary}/></Text>;
              break;
            case 'AlbumScreen':
              iconName =  <Text> <Icon name="albums-outline" size={20} color={colores.primary}/></Text>;
              break;
            default:
              break;
          }

        return  <Text style={{color}}>{iconName} </Text>;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
