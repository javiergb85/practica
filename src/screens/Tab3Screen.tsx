import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('tab 3');
  }, []);
  return (
    <View>
      <Text> Tab 3 Screen</Text>
    </View>
  );
};

export default Tab3Screen;
