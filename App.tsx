import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import StackNavigator from './src/navigator/StackNavigator';
import MenuLateral from './src/navigator/MenuLateral';
//import Tabs from './src/navigator/Tabs';
import {AuthProvider} from './src/context/AuthContext ';
import {FC} from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <MenuLateral />
        {/* <Tabs />  */}
      </AppState>
    </NavigationContainer>
  );
};
interface AppProps {}

const AppState: FC<AppProps> = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
