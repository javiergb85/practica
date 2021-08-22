import React, {useContext} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext ';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const context = useContext(AuthContext);

  return (
    <SafeAreaView style={{...styles, marginTop: insets.top + 20}}>
      <Text style={styles.title}> Settings </Text>
      <Text style={styles.title}> {JSON.stringify(context.authState)} </Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
