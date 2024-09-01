import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'twrnc';
import CardComponent from './components/CardComponent';

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={tw`mt-5 pt-3 mb-40`}>
    <View style={tw`bg-blue-300 `}>
      <Text style={tw`m-2 p-2 ml-4 text-3xl bg-blue-400`}>Store</Text>
      <CardComponent/>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

