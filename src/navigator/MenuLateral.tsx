import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  // DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles, colores} from '../theme/appTheme';
//import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.stevefarber.com/wp-content/uploads/2019/01/man-avatar-placeholder.png',
          }}
          style={styles.avatar}
        />

        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Text style={styles.menuTexto}>
              {' '}
              <Icon
                name="navigate-outline"
                size={20}
                color={colores.primary}
              />{' '}
              Navegación{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsScreen')}>
            <Text style={styles.menuTexto}>
              {' '}
              <Icon
                name="settings-outline"
                size={20}
                color={colores.primary}
              />{' '}
              Ajustes{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default MenuLateral;
