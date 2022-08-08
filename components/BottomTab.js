import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTab() {
  return (
    <View style={styles.container}>
      <Text>BottomTab</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        // marginTop:30,
        bottom:"-190%",
        justifyContent:"center",
        alignItems:"center"


    }
})