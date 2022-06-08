import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialIcons, FontAwesome5, Octicons } from "@expo/vector-icons";
import { Keyboard,Alert, KeyboardAvoidingView, Platform, AsyncStorage, StyleSheet} from "react-native";
import { Appbar, Avatar, Badge, FAB } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TelaLogin from './telas/TelaLogin';
import TelaLista from './telas/TelaLista';
import TelaDetalhes from './telas/TelaDetalhes';
import TelaFinalizadas from './telas/TelaFinalizadas';
import TelaMenu from './telas/telaMenu';
import Navegar from './telas/telaMenu';




const Tab = createMaterialBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login" activeColor="#FFFF"
      barStyle={{ backgroundColor: '#35AAFF' }} >
        <Tab.Screen name="Login" component={TelaLogin}  options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

        <Tab.Screen name="Lista de Tarefas" component={TelaLista}  options={{
          tabBarLabel: 'Lista de Tarefas',
          tabBarIcon: ({ color }) => (
           <FontAwesome5 name="clipboard-list" size={22} color="black" />
          ),
        }}
      />
         <Tab.Screen name="Finalizadas" component={TelaFinalizadas}  options={{
          tabBarLabel: 'Salvas',
          tabBarIcon: ({ color }) => (
            <Octicons name="checklist" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen name="Menu" component={Navegar} options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

          </Tab.Navigator>
        
    </NavigationContainer>

  );
};



export default App;


