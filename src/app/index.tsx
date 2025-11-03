import Google from "@/assets/images/google-logo.svg";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp
} from 'react-native-reanimated';

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
   <ImageBackground source={require("@/assets/images/ecommerce-splash.jpg")}
   style={{ flex: 1 }}
   resizeMode ="cover"
   > 
    <View style={styles.container}>
      <LinearGradient colors={["transparent","rgba(255, 255, 255, 0.9)","rgba(255, 255, 255, 1)"]}
       style={styles.background}
      >
    <View style={styles.wrapper}>
        <Animated.Text 
          style={styles.title} 
          entering={FadeInUp.delay(500).duration(500).springify()}
        >
          Welcome To Benin Facile
        </Animated.Text>
        <Animated.Text 
          style={styles.description} 
          entering={FadeInDown.delay(500).duration(500).springify()}
        >
          La plateforme tout en un qui vous facililte la vie
        </Animated.Text>
      <View style={styles.socialLoginWrapper}>
        <Link href={"/signup"} asChild>
          <TouchableOpacity style={styles.button}> 
            <Ionicons name="mail-outline"
            size={20}
            color={Colors.black}
            />
            <Text style={styles.btnTxt}>Continue with email</Text>
          </TouchableOpacity>
        </Link>
          <TouchableOpacity style={styles.button}> 
            <Google width= {20} height={20} />
            <Text style={styles.btnTxt}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}> 
            <Ionicons name="logo-apple"
            size={20}
            color={Colors.black}
            />
            <Text style={styles.btnTxt}>Continue with Apple</Text>
          </TouchableOpacity>
      </View>
      
      <Text style={styles.loginTxt}>Avez-vous déjà un compte ?
      <Link href={"/signin"} asChild>
        <TouchableOpacity>
          <Text style ={styles.loginTxtSpan}> Se connecter</Text>
        </TouchableOpacity>
      </Link>
      </Text>
    </View>
      </LinearGradient>
    </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
tilte: {
    fontSize: 22,
    color: "#1638e5ff",
    fontWeight: 700,
    letterSpacing:2.4,
    marginBottom: 5,
},
background:{
  flex:1,
  position:"absolute",
  top:0,
  bottom:0,
  left:0,
  right:0,
  justifyContent:"flex-end",
},

wrapper:{
  paddingBottom: 50,
  paddingHorizontal: 20,
  alignItems:"center",
},
title:{
  fontSize: 22,
  color: "#1638e5ff",
  fontWeight: "700",
  letterSpacing: 2.4,
  marginBottom: 5,
},
description:{
  fontSize: 15,
  color: Colors.gray,
 lineHeight: 30,
letterSpacing: 1.2,
  marginBottom: 20,
},

socialLoginWrapper: {
  alignSelf: 'stretch'
},

button: {
  flexDirection: 'row',
  padding: 10,
  borderColor: Colors.gray,
  borderWidth: StyleSheet.hairlineWidth,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
  marginBottom: 15,
},

btnTxt: {
  fontSize: 14,
  fontWeight: '700',
  color: Colors.black,
},

loginTxt:{
  marginTop: 30,
  fontSize: 14,
  color: Colors.black,
  LineHeight: 24
},
loginTxtSpan: {
color: Colors.primary,
fontWeight: '600'
}

});

