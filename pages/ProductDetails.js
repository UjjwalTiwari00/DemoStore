import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const ProductDetails = ({ route }) => {
  const { data } = route.params;

  return (
    <View style={tw`m-4 p-4`}>
      <Image
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
        }}
        source={{ uri: data.image }}
      />
      <Text style={tw`text-xl font-bold mt-4`}>{data.title}</Text>
      <Text style={tw`text-lg mt-2`}>{data.description}</Text>
      <Text style={tw`text-lg mt-2`}>Price: ${data.price}</Text>
    </View>
  );
};

export default ProductDetails;