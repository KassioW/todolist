import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { Keyboard, Alert, KeyboardAvoidingView,Platform,AsyncStorage} from "react-native";

import { StyleSheet, Text, View,TextInput,TouchableOpacity, FlatList} from "react-native";
import './TelaLista.js';
import tasks from './TelaLista'

const TelaFinalizadas = ({ navigation }) => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  async function addTask() {
    const task = AsyncStorage.getItem();

    setTask([...task, newTask]);
    setNewTask("");

    Keyboard.dismiss();
  }
 async function removeTudo(tasks) {
    Alert.alert(
      "Deletar Task",
      "Deseja remover todas as tarefas?",
      [
        {
          text: "Não",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => setTask(task.filter(tasks => tasks !== tasks))
        }
      ],
      { cancelable: false }
    );
  }

  async function removeTask(item) {
    Alert.alert(
      "Deletar Task",
      "Deseja remover a tarefa?",
      [
        {
          text: "Não",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => setTask(task.filter(tasks => tasks !== item))
          
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    async function carregaDados() {
      const task = await AsyncStorage.getItem("task");

      if (task) {
        setTask(JSON.parse(task));
      }
    }
    carregaDados();
  }, []);

  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    salvaDados();
  }, [task]);

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{ flex: 1 }}
        enabled={Platform.OS === "ios"} >

        <View style={styles1.container}>
          <View style={styles1.Body}>
     
            <FlatList
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              style={styles1.FlatList}
              renderItem={({ item }) => (
                <View style={styles1.ContainerView}>
                  <Text style={styles1.Texto}>{item}</Text>
                  <TouchableOpacity onPress={() => removeTask(item)} >
                    <MaterialIcons
                      name="delete-forever"
                      size={25}
                      color="#f64c75"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />   
                 <View style={styles1.finalizadas}>
               <TouchableOpacity style={styles1.Button} onPress={() => removeTudo()}>
              <MaterialIcons name="delete-forever" size={25} color="white" style={styles1.txtbottons}/>
            </TouchableOpacity>
            </View>
          </View>  
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default TelaFinalizadas

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: "#eee",

  },
  Body: {
    flex: 1
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignitens: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10
  },
  FlatList: {
    flex: 1,
    marginTop: 5,

  },
  Texto: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center"
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 50,
    backgroundColor: "white",
    boxShadow: `1px 3px 1px`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: '#18D414'
  },
  finalizadas:{
   flexDirection: 'row',
   justifyContent: 'center',
   paddingTop: 15,
   padding: 5,
  },
  txtbottons:{
    fontSize: 20,
    fontFamily: 'sans-serif',
    color: '#ffffff', 
    textAlign: 'center',
  }


});

