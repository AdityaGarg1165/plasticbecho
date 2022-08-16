import React,{useEffect} from 'react';
import { StyleSheet } from 'react-native';
// import { StyleSheet ,AsyncStorage} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { ProductDetailsp } from './screens/pvProductDetails.js';
import { ProductDetailsg } from './screens/gProductDetails.js';
import { ProductsListp } from './screens/pp.js';
import { ProductsListg } from './screens/gProductsList';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import sanityClient from './sanityClient'
import { CartProvider } from './CartContext.js';
import Login from './screens/Login.js';
import UselessTextInputMultiline from './screens/Login.js';
const Stack = createNativeStackNavigator();
function App() {
  // useEffect(async()=>{
  //   await AsyncStorage.setItem("name","sd")
  //   console.log(AsyncStorage.getItem("name"))
  // },[])
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Started' component={UselessTextInputMultiline} 
          options={({ navigation }) => ({
            title: 'Getting started',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Food Grade Plastics',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='gProducts' component={ProductsListg} 
          options={({ navigation }) => ({
            title: 'Food Grade Plastics',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='2Products' component={ProductsListp} 
          options={({ navigation }) => ({
            title: 'PVC Products',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='gProductDetails' component={ProductDetailsg} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='ProductDetails2' component={ProductDetailsp} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          {/* <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
export default App;