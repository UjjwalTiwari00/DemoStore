import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "twrnc";
import CardComponent from "./components/CardComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./pages/ProductDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-blue-300 mt-10`}>
      <Text style={tw`m-2 p-2 ml-4 text-4xl font-bold`}>Store</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CardComponent"
            component={CardComponent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
