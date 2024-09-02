import { View, Text, Image, Button } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const CardData = ({ values,onPress }) => {
    const title=values.title
  
  function getFilteredNames() {
   let name= title.trim().split(" ")
    if (name.length>1) {
        return name[0]+" "+name[1]+"....."
    }
  }

  return (
    <View key={values.id} style={tw`m-2 p-2`}>
      <View style={tw`flex flex-row m-2`}>
      <Image
        style={{
          width: 120,
          height: 120,
          resizeMode: 'contain',
        }}
        source={{ uri: values.image }}
      />
      <Text>{getFilteredNames()}</Text>
      </View>
      <Button style={tw`w-2 h-2`} title='press me' onPress={onPress}></Button>
    </View>
  );
};

export default CardData;
