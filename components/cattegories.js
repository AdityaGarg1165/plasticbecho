import { View, Text } from 'react-native'
import React from 'react'

export default function Categories() {
  return (
    <View style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // marginLeft:,
        flexDirection:"row",
        marginTop:45
    }}>
      <Text style={{marginLeft:12,
      borderWidth:1,
      borderColor:"gray",
      width:70,
      height:30,
      paddingTop:3,
      paddingLeft:13,
      borderRadius:28
    }}>Tshirts</Text>
      <Text style={{marginLeft:12,
         borderWidth:1,
         borderColor:"gray",
         width:70,
         height:30,
         paddingTop:3,
         paddingLeft:10,
         borderRadius:28
    }}>Hoodies</Text>
      <Text style={{marginLeft:12,
         borderWidth:1,
         borderColor:"gray",
         width:65,
         height:30,
         paddingTop:3,
         paddingLeft:16,
         borderRadius:28,
    }}>Mugs</Text>
      <Text style={{marginLeft:12,
         borderWidth:1,
         borderColor:"gray",
         width:70,
         height:30,
         paddingTop:3,
         paddingLeft:13,
         borderRadius:28
    }}>Shoes</Text>
    </View>
  )
}