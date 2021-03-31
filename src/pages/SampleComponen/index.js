import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponen = () => {
  return (
    <View>
      <Text>Deni Suryadi</Text>
      <Text>08551607171</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/any'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Componen dari Class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100}}
        />
        <Text>Ini Hewan</Text>
      </View>
    );
  }
}

export default SampleComponen;
