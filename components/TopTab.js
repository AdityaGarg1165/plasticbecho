import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-shadow-cards'
import {FcAbout} from 'react-icons/fc'

export default function BottomTab({styles}) {
  return (
    <View style={styles}>
        <Text style={{color:"white",fontSize:25,display:"flex",marginLeft:-282}}>
          Home
        </Text>
      
    </View>
  )
}