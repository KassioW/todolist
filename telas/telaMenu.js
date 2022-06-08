import React from 'react';
import { Keyboard,KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, View, StyleSheet, Animated, FlatList } from "react-native";
import { List } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaDetalhes from './TelaDetalhes'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

  const Navegar = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={TelaMenu} options={{headerShown: false}}/>
        <Stack.Screen name="Detalhes" component={TelaDetalhes}/>
      </Stack.Navigator>
  );
};
 

export default function TelaMenu({navigation}) {


 const telas = [
  { id: 2, nome: 'Notificações', } ,
  { id: 3, nome: 'Me Ajuda' },
  { id: 4, nome: 'Sobre' },
];


  return (
    <View >
      <FlatList 
        data={telas}
        renderItem={({ item }) => {
          return (
            <List.Item style = {styles.container}
              title={item.nome}
              onPress={() => navigation.navigate("Detalhes", item) }
            />
          );
        }}
      />
    </View>
  );
}; 



const styles = StyleSheet.create({
  container: {
    width: 325,
    marginTop: 35,
    padding: 5,
    marginLeft: 10,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowBox: '3px 5px 2px',
    shadowRadius: 3,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: '#18D414'
    },
});

