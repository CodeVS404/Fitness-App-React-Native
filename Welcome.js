import React from "react";
import {View,Image,StyleSheet,Text,Button,Alert} from "react-native"
import RegButton from "../components/regButton";
import RegButtonWhite from "../components/regButtonWhite";



class Welcome extends React.Component{
    render(){
      
        return(
            <View  style={{backgroundColor:'#aaa',flex:1,justifyContent: 'flex-end', alignItems: 'center'}}>
                
                <Image style={{flex:1,resizeMode:'cover',width:'100%'}} source={require('../image/4.jpg')}>
                </Image>
                  <View style={{width:'100%',height:350,position:'absolute'}}>
                     <View  style={{backgroundColor:'#000',flex:2,opacity:0.9,borderTopLeftRadius:15,borderTopRightRadius:15,justifyContent:'space-around'}}>
                     <Text style={{paddingLeft:20,paddingTop:10,flex:1,...styles.h2}}>12K + Fitness programs</Text>
                     <Text style={{paddingLeft:20,flex:3,...styles.h1}}>Discover the Gym your Deserve</Text>
                     </View>
                     <View  style={{backgroundColor:'#000',flex:3,justifyContent:'flex-end'}}>
                     <Text numberOfLines={4} style={{paddingLeft:20,flex:3,...styles.h3}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                     <View style={{flex:3,backgroundColor:'#000',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                      <RegButton onPress={{} = () => this.props.navigation.navigate("Login") }  Name={"Login"}></RegButton>
                      <RegButtonWhite  Name={"Sign Up"}></RegButtonWhite>
                     </View>
                     </View> 
                    

                   
                  </View> 

            </View> 
         )
    }
    
}
var styles = StyleSheet.create({
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
      color:'#fff',
      fontSize:30,
      fontFamily:'KohinoorDevanagari-Regular'
    },
    btnLogin:{
     width:85,
     height:35,
    }
  });
export default Welcome