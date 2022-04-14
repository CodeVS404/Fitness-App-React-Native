import React from "react";
import {TouchableOpacity,Text,StyleSheet} from 'react-native'

const RegButton = ({Name,onPress}) =>{
   
    return(
    <TouchableOpacity onPress={onPress} style={{backgroundColor:'#1078D3',borderRadius:25,width:175,height:50,justifyContent:'center',alignItems:'center',marginHorizontal:10}}>
        <Text style={styles.h2}>{Name}</Text>
    </TouchableOpacity>
    )
}
var styles = StyleSheet.create({
 h2:{
      color:'#fff',
      fontSize:18,
      fontWeight:'bold',
      fontFamily:'KohinoorDevanagari-Regular'
      
    },
})
export default RegButton