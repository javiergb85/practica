import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('tab 2');
  }, []);
  return (
    <View>
      <Text> Tab 2 Screen</Text>
    </View>
  );
};

export default Tab2Screen;
