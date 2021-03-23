import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SampleComponen from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponen />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  );
};

export default App;
