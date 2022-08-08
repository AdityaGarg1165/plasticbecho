import { View, Text,Image,StyleSheet,ScrollView,Platform } from 'react-native'
import React from 'react'

export default function Card() {
    const items = [
        {
            title:"plastic boxes",
            price:"99",
            uri:"../assets/1.png"
        },
        {
            title:"plastic boxes",
            price:"99",
            uri:"../assets/1.png"
        },
        {
            title:"plastic boxes",
            price:"99",
            uri:"../assets/1.png"
        },
        {
            title:"plastic boxes",
            price:"99",
            uri:"../assets/1.png"
        },
        {
            title:"plastic boxes",
            price:"99",
            uri:"../assets/1.png"
        }
    ]
  return (
    <View>
        <ScrollView>
            {items.map((im)=>(
                <Image style={styles.card} source={require("../assets/1.png")}></Image>
                // <Image source={require(im.uri)}></Image>
            ))}
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  androidcard:{
        width:300,
      backgroundColor:"white",
      display:"flex",
      paddingTop:50,
      marginLeft:50,
      alignItems:'center',
      borderColor:"black",
      elevation:14,
      borderRadius:10,
      marginTop:20
    //   borderWidth:1
  },
  ioscard:{
        width:300,
      backgroundColor:"white",
      display:"flex",
      paddingTop:50,
      marginLeft:50,
      alignItems:'center',
      borderColor:"black",
      elevation:14,
      borderRadius:10,
      marginTop:20
    //   borderWidth:1
  }
})