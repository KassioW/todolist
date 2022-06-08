import React from 'react';
import { Keyboard,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, View, StyleSheet, Animated } from "react-native";
import { Button } from 'react-native-paper';

const TelaLogin = ({ navigation }) => {

  return(

    <KeyboardAvoidingView style={styles.background}>

    <View style={styles.containerLogo}>

    <Image source={require('./assets/logo-nome.png')}/>
    </View>

    <View >
    <Text style={styles.titulo}>Faça Seu Login</Text>
    </View>

    <View style={styles.container}>
    <TextInput 
    style={styles.input}
placeholder="E-mail" 
autoCorrect={false}
onChangeText={()=> {}}
  />


    <TextInput style={styles.input}
placeholder="Senha" 
autoCorrect={false}
onChangeText={()=> {}} />

    <TouchableOpacity style={styles.btnSubmit} mode="contained" onPress={() => navigation.navigate('Lista de Tarefas')}>
    <Text style={styles.btnText}> Continuar</Text> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnRegister}>
    <Text style={styles.registerText}> Não Possui conta? registre agora</Text>
    </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default TelaLogin;
  
const styles = StyleSheet.create({
background:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFF'
},
containerLogo:{
  flex:1,
  justifyContent: 'center'
},
container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '98%',
  paddingBotton: 50
},
input:{
  backgroundColor: '#fff',
  width: '98%',
  margin: 10,
  color: '#2DFF37',
  fontSize: 17,
  borderRadius: 7,
  padding:10,
},
btnSubmit:{
  backgroundColor: '#35AAFF',
  width: '98%',
  margin: 10,
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:7
},
btnRegister:{
  marginTop:10,
  color: '#fff'
},
registerText:{
  color: '#18D414',
  fontSize:18,
},
btnText:{
  fontSize:18,
  color: '#FFF'
},
titulo:{
   color: '#18D414',
  fontSize:18,
}

});