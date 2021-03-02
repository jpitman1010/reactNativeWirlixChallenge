'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, FormInput,TextInput, View, SafeAreaView, Image, Alert, TouchableHighlight,Button, navigation } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


import { createAppContainer } from 'react-navigation';
import { NavigationContainer} from 'react-navigation-stack';

import { Swipe } from './src/screens/register.js';
// import { VideoOverlay } from './src/screens/videoOverlay';
// import { Register } from './src/screens/register'

export default function App () {

        const handlePress = () => console.log("Text was clicked")

    
        const containerStyle = {backgroundColor: "black"}
    
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'black',
          alignItems: "stretch",
          justifyContent: "space-evenly",
    
        },
        tinyLogo: {
          width: 30,
          height: 30,
        },
        theLogo: {
          width:55,
          height: 45,
          marginLeft: 30,
    
        },
        formTextLogo: {
          flexDirection: "row",
          alignItems:"center",
          marginLeft:30,
          marginTop:26,
          
        },
        camera: {
          width: 80,
          height: 80,
          alignContent: "flex-end"
        },
        submitText:{
          paddingTop:8,
          paddingBottom:8,
          color:'white',
          textAlign:'center',
          backgroundColor:'black',
          borderRadius: 10,
          borderWidth: 5,
          borderColor: 'white',
          width: '90%',
          marginLeft: 30,
        },
      })
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View flex={.6}>
        <Image source ={require("./assets/wirlixLogo.png" )} style={styles.theLogo} />
        </View>
        <Text style={{color:"white", fontSize:18,marginLeft:30}}  numberOfLines={1} onPress={handlePress}>
          Better Conversations. 
        </Text>
        <Text style={{color:"#00ffff", fontSize:30,marginLeft:30,marginTop:-40, fontWeight:"bold"}}  numberOfLines={2} onPress={handlePress} >
          W I R L I X                   {}
          <Image source={require("./assets/camera.png")} style={styles.camera}/>
        </Text>
     
      <View marginTop={'30%'}>
        <View style={styles.formTextLogo}>
            <Image source={require("./assets/user.png")} style={styles.tinyLogo}/>
            <TextInput  type="text" placeholder='Full Name' placeholderTextColor="gray" style={{margin:10, height:20, fontSize:18, border:"none",color:"white",opacity:'90%', width:'90%'}}/>
        </View>
        <View style={styles.formTextLogo}>
            <Image source={require("./assets/user.png")} style={styles.tinyLogo} />
            <TextInput type="text" placeholder='Username' placeholderTextColor="gray" style={{margin:10, height:20, fontSize:18, border:"none",color:"white"}}/>
        </View>
        <View style={styles.formTextLogo}>
            <Image source={require("./assets/phone.png")} style={styles.tinyLogo} />
            <TextInput  type="text" placeholder='Phone Number' placeholderTextColor="gray" style={{margin:10, height:20, fontSize:18, border:"none",color:"white"}}/>
        </View>
        <View style={styles.formTextLogo}>
            <Image source={require("./assets/password.png")} style={styles.tinyLogo} />
            <TextInput  type="password" placeholder="Password                                  " placeholderTextColor="gray" style={{margin:10, height:20, fontSize:18,border:"none", color:"white"}}>
              </TextInput>
            <Button style={{fontWeight:"light", color:"#00B0FF", marginLeft:30, textAlign:"right", fontSize:10,flexDirection:"right"}}
            title="Show"
            oonPress={() => 
              {() =>Alert.alert("Button Tapped", "This would eventually unmask the password and toggle to hide password", (text) => console.log(text))
            }
          }/>
          </View>             
        </View>
        <View style={[{width:"90%", backgroundColor:"black",height:'7%',flex:1.5, marginTop:'28%', color:"white"}]}>
        
        <TouchableHighlight
          style={styles.submit}
          onPress={() => Alert.alert("Sign Up Button Pressed")}

          underlayColor='#fff'>
            <Text style={styles.submitText}>S i g n  U p</Text>
        </TouchableHighlight>
          <Text style={{color:"gray", fontSize:16,  marginTop:40, textAlign:"center"}}  
            numberOfLines={1} onPress={handlePress}>
              Already have an account?  {}
            <Text style={{color:"#00B0FF", fontSize:14}}>Log In</Text>
          </Text>
       </View>
       </SafeAreaView>
      
); 
};



// 'use strict';
// import React, { useState, Form, Component } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, FormInput,TextInput, View, SafeAreaView, Image, Alert, Platform,TouchableHighlight,Animated ,validateContent,validateLength, ImageBackground,TouchableOpacity, Button } from 'react-native';
// import { SwipeablePanel,componentDidMount,openPanel,closePanel,setState,constructor,swipeablePanelActive } from 'rn-swipeable-panel';




// constructor(props) {
//   super(props);
//   this.state = {
//     bounceValue: new Animated.Value(100),  //This is the initial position of the subview
//     buttonText: "Show Subview"
//   };
// }

  // const openPanel = () => {
  //   setIsPanelActive(false);
  // };

  // const closePanel = () => {
  //   setIsPanelActive(false);
  // };
      


// const containerStyle = {backgroundColor: "black"}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: "stretch",
//     justifyContent: "space-around",
//     color:"white",

//   },
//   tinyLogo: {
//     width: 10,
//     height: 10,
//   },
//   theLogo: {
//     width: 45,
//     height: 45,
//     marginLeft: 30,

//   },
//   formTextLogo: {
//     flexDirection: "row",
//     alignItems:"center",
//     marginLeft:30,
//     marginTop:100,
//     alignContent:"center",
//     color: "white",
    
//   },
//   camera: {
//     width: 80,
//     height: 80,
//     alignContent: "flex-end"
//   },
//   submitText:{
//     paddingTop:8,
//     paddingBottom:8,
//     paddingLeft: 40,
//     paddingRight: 40,
//     color:'white',
//     textAlign:'center',
//     backgroundColor:'black',
//     borderRadius: 10,
//     borderWidth: 5,
//     borderColor: 'white',
//     width: '100%',
//     marginLeft: 30,
//     marginBottom:20,
//     marginTop:'80%',
//     borderBottomColor: "white",
//   },
//   subView: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "white",
//     height: '100%',
//     color: "black",
//     alignItems:'center',
//     width: '100%',
//     marginTop: '20%',
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },})
  

// export default function App () {

//     return (
//       // <ImageBackground source={'./assets/swipeScreen.png'} style={styles.image}>
//         <SafeAreaView style={styles.container}>
//               {/* <View style={styles.subView}> */}
      

//      <View flex={.5}>
//         <Image source ={require("./assets/wirlixLogo.png" )} style={styles.theLogo} />
//         <Text color={'black'} >Start Your Own</Text>
//         <Text color={'black'}>Conversation</Text>
//     </View>

//     <View >
//         <TextInput placeholder={'Title Room (Ask a Question)'} placeholderTextColor={'white'} style={styles.formTextLogo}/> 
//         <TextInput placeholder={'Description (Optional)'} placeholderTextColor={'white'} style={styles.formTextLogo}/> 
//     </View>
//     <View marginTop={'60%'} flex={.7} alignItems={'center'}>
       
//         <Image source={require("./assets/password.png")} style={styles.theLogo} alignItems={'center'} />
//         <Text style={{color:"white",marginTop:30,marginLeft:10}} textAlign={'center'}> 
//         Shared with <Text style={{fontWeight:'bold'}}>people I invite.</Text>
//         </Text>
//     </View>
//     <View>
//         <TouchableHighlight
//           style={{width:'90%'}}
//           underlayColor='white'>
//           <Text style={styles.submitText}>Start Conversation</Text>
//         </TouchableHighlight>
//         <SwipeablePanel isActive={swipeablePanelActive} onClose={() => closePanel()} openPanel={true} />
//     </View>
//     </SafeAreaView>
//     // </ImageBackground>
//     );
//   };