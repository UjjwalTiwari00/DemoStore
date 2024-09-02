import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
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
      <TouchableOpacity style={tw`bg-blue-500 p-2 w-30 h-10 rounded-lg items-center justify-center`} onPress={onPress}><Text style={tw`text-white`}  >click me</Text></TouchableOpacity>
      
    </View>
  );
};

export default CardData;
