import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FlexBox from '../src/pages/FlexBox';
import Position from '../src/pages/Position';
import SampleComponen from '../src/pages/SampleComponen';
import StylingComponen from '../src/pages/StylingComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponen />
        <StylingComponen />
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
