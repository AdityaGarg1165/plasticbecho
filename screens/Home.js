import { View, Text ,SafeAreaView,StyleSheet,StatusBar} from 'react-native'
import Card from '../components/Card'
import React from 'react'
import TopTab from '../components/TopTab'
import BottomTab from '../components/BottomTab'
import Categories from '../components/cattegories'

export default function Home({navigation}) {
    function redirect(){
        navigation.navigate('about')
    }
  return (
    <SafeAreaView>
      {/* <StatusBar></StatusBar> */}
      {/* <TopTab styles={styles.bottom} /> */}
      <Categories/>
      <Card/>
      <BottomTab/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    bottom:{
        display:"flex",
        width:"100%",
        height:100,
        elevation:4,
        justifyContent:"center",
        alignItems:"center",
        // marginTop:709,
        // zIndex:999,
        marginTop:StatusBar.currentHeight,
        backgroundColor:"#D83243",
        // backgroundColor:"white",
        // elevation:13
    }
})