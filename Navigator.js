import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SelectData from "../screens/SelectData";
import Welcome from "../screens/Welcome";
import Login from '../screens/Login';


const Stack = createStackNavigator();

function MyStack() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name="Welcome" component={Welcome} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="SelectData" component={SelectData} />
       </Stack.Navigator>
      </NavigationContainer>
    
  );
}
export default MyStack