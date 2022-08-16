import React from 'react';
import { View,Text, TextInput,Image,TouchableOpacity } from 'react-native';

const UselessTextInput = (props) => {
    return (
        <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        />
        );
    }
    
    const UselessTextInputMultiline = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  
  // If you type something in the text box that is a color, the background will change to that
  // color.
  function navigate(){
    navigation.navigate("Products")
  }
  return (
      <View>

      <Image style={{width:140,height:140,borderRadius:120,marginLeft:100,marginTop:50}} source={require("../assets/logo.jpg")}/>
    <View
      style={{
          marginTop:140,
          marginLeft:20,
          backgroundColor: value,
          width:"90%",
          borderColor: '#000000',
          borderWidth: 1,
        }}>
        <Text style={{marginTop:-40,fontFamily:"sans-serif",fontSize:20,fontWeight:"bold"}}>Address</Text>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{marginTop:20}}
        />
    </View>
    <TouchableOpacity onPress={navigate}>

    <View style={{backgroundColor:"black",width:"30%",marginLeft:135,padding:15,borderRadius:10,marginTop:90}}>
        <Text style={{color:"white"}}>Get Started</Text>
    </View>
    </TouchableOpacity>
        </View>
  );
}

export default UselessTextInputMultiline