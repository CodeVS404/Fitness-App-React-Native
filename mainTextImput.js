import React from "react";
import {View,Image,StyleSheet,Text} from "react-native"
import { TextInput } from "react-native-gesture-handler";

const MainTextImput = ({NameTitle = "NameTitle",Icon,Placeholder="Place"}) =>{
    return(
        <View style={{width:'100%',height:100}}>
            <Text style={styles.h3}>{NameTitle}</Text>
            <View style={styles.imputView}>
                <Image style={styles.imputIcon} source={Icon} ></Image>
                <TextInput placeholder={Placeholder} placeholderTextColor={'#777'} style={styles.imputText}></TextInput>
            </View>
        </View>
    )
}
export default MainTextImput

var styles = StyleSheet.create({
    imputText:{
        color:'#ccc',
        fontSize:16,
        width:'80%',
        height:30,
        left:25
        

    },
    imputIcon:{
     resizeMode:'stretch',
     tintColor:'#ccc',
     width:23,
     height:23,
     left:15,
    
    },
    imputView:{
        flexDirection:'row',
        alignItems:'center',
        width:'90%',
        height:45,
        top:10,
        left:20,
        right:20,
        backgroundColor:'#333',
        borderRadius:22
    },
    shadow:{
      shadowColor: '#000',
      
      shadowOffset:{
        width:0,
        height: -50,
      },
      shadowOpacity:1,
      shadowRadius:15,
      elevation:30
  },
  h3:{
    left: 30,
    color:'#bbb',
    fontSize:15,
    fontFamily:'KohinoorDevanagari-Regular'
    
  },
  h2:{
    color:'#aaa',
    fontSize:18,
    fontWeight:'bold',
    fontFamily:'KohinoorDevanagari-Regular'
    
  },
  h1:{
    color:'#aaa',
    fontSize:30,
    fontFamily:'KohinoorDevanagari-Regular'
  }
});