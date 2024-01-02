/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddMedicine from './screens/AddMedicine';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './components/Main';
import HomePage from './screens/HomePage';
import Supplier from './screens/Supplier';
import SplashScreen from './screens/SplashScreen';
import AddSupplier from './screens/AddSupplier';



const stack = createStackNavigator();


function App(){ 

  return (
   
    
     <NavigationContainer>
       

        <stack.Navigator initialRouteName='splash'>
          <stack.Screen name='login' component={Login}/>
          <stack.Screen name='regis' component={Register}/>
          <stack.Screen name='add' component={AddMedicine}/>
          <stack.Screen name='home' component={HomePage}/>
          <stack.Screen name='supplier' component={Supplier}/>
          <stack.Screen name='addsupplier' component={AddSupplier}/>
          <stack.Screen name='splash' options={{headerShown:false}} component={SplashScreen}/>       
         

        </stack.Navigator>       
      </NavigationContainer>    
    
  );
}


export default App;
