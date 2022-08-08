import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import { redirect } from 'next/dist/server/api-utils'

export default function Categories() {
  const navigation = useNavigation()
  function redirect(){
    navigation.navigate("Products")
  }
  function redirect_2(){
    navigation.navigate("2Products")
  }
  function redirect_3(){
    navigation.navigate("gProducts")
  }
  return (
    <View style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // marginLeft:,
        flexDirection:"row",
        marginTop:45
    }}>
      <TouchableOpacity onPress={redirect}>

      <Text style={{marginLeft:12,
      borderWidth:1,
      borderColor:"gray",
      width:130,
      height:30,
      paddingTop:3,
      paddingLeft:13,
      borderRadius:28
    }}>packaging plastic</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={redirect_2}>


      <Text style={{marginLeft:12,
         borderWidth:1,
         borderColor:"gray",
         width:100,
         height:30,
         paddingTop:3,
         paddingLeft:10,
         borderRadius:28
        }}>PVC Plastics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={redirect_3}>
      <Text style={{marginLeft:12,
        borderWidth:1,
        borderColor:"gray",
        width:130,
        height:30,
        paddingTop:3,
        paddingLeft:16,
        borderRadius:28,
      }}>General Plastics</Text>
      </TouchableOpacity>

    </View>
  )
}