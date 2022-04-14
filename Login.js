import React from "react";
import {View,Image,StyleSheet,Text,Button,Alert} from "react-native"
import { TextInput } from "react-native-gesture-handler";
import MainTextImput from "../components/mainTextImput";
import RegButton from "../components/regButton";
import RegButtonWhite from "../components/regButtonWhite";




class Login extends React.Component{
 
  

  
  
    render(){
      
        return(
            <View  style={{backgroundColor:'#aaa',flex:1,justifyContent: 'flex-end', alignItems: 'center'}}>
                
                <Image style={{flex:1,marginBottom:260,resizeMode:'cover',width:'100%'}} source={require('../image/3.jpg')}>
                </Image>
                  <View style={{width:'100%',height:500,position:'absolute'}}>
                     <View  style={{backgroundColor:'#000',flex:2,opacity:0.9,borderTopLeftRadius:15,borderTopRightRadius:15,justifyContent:'space-around'}}>
                     <Text style={{paddingLeft:20,paddingTop:10,flex:1,...styles.h1}}>Login to your account</Text>
                     <Text style={{paddingLeft:20,paddingTop:10,flex:1,...styles.h3}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>
                     </View>
                     <View  style={{backgroundColor:'#000',flex:4,justifyContent:'flex-end'}}>
                         <View style={{flex:2}}>
                             <MainTextImput  NameTitle="Email address" Icon={require('../image/email.png')} Placeholder="Email Address"></MainTextImput>
                             <MainTextImput  NameTitle="Password" Icon={require('../image/pass.png')} Placeholder="Password"></MainTextImput>
                             <View style={{width:'100%',height:25,justifyContent:'flex-end',alignItems:'flex-end'}}>
                             <Text style={{marginBottom:10,width:160,height:25,...styles.h3}}>Foget password?</Text>
                             </View>
                         </View>
                     
                      
                      <View style={{flex:1,backgroundColor:'#000',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                      <RegButton style={{flex:1}} onPress={{} = () => this.props.navigation.navigate("SelectData") }  Name={"Login"}></RegButton>
                      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                      <Text style={{height:25,...styles.h3}}>Not registered yet? </Text>
                      <Text style={{...styles.h3,height:25,color:'#36f',}}>Register Now</Text>
                      </View>
                      
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
export default Login