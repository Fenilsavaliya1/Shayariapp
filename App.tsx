import  React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "./Home";
import { SayriList } from "./SayriList";
import { OpenShayri } from "./OpenShayri";
import { Prime } from "./Prime";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SayriList" component={SayriList} />
        <Stack.Screen name="OpenShayri" component={OpenShayri} />
        <Stack.Screen name="Prime" component={Prime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;