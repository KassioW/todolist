import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { Keyboard, Alert, KeyboardAvoidingView,Platform,AsyncStorage} from "react-native";

import { StyleSheet, Text, View,TextInput,TouchableOpacity, FlatList} from "react-native";
import './TelaFinalizadas.js';
import {Card} from 'react-native-shadow-cards';

const TelaLista = ({ navigation }) => {


  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  async function addTask() {
    const search = task.filter(task => task === newTask);

    if (search.length !== 0) {
      Alert.alert("Atenção", "Nome da tarefa repetido!");
      return;
    }

    setTask([...task, newTask]);
    setNewTask("");

    Keyboard.dismiss();
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

    async function finalizaTask(item) {
    Alert.alert(
      "Finalizar Task",
      "Você finalizou a tarefa?",
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

      async function finalizaTudo(tasks) {
    Alert.alert(
      "Finalizar Tudo",
      "Você deseja finalizar todas as tarefas?",
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
        
        <View style={styles.container}>
          <View style={styles.Body}>
          
       <View style={styles.finalizadas}>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => removeTudo()}    >
            <Text style={styles.txtbottons}>  <MaterialIcons name="delete-forever" size={25} color={'#FFFFFF'} /> </Text>  
             </TouchableOpacity>

              <TouchableOpacity style={styles.btnSubmit} onPress={() => finalizaTudo()}   >
            <Text style={styles.txtbottons}>  <MaterialIcons name="done-all" size={25} color={'#18D414'} /> </Text>  
            </TouchableOpacity>
     </View>
            <FlatList
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.FlatList}
              renderItem={({ item }) => (
                <View style={styles.ContainerView}>
                  <Text style={styles.Texto}> {item} </Text>
                  <TouchableOpacity onPress={() => removeTask(item)} >
                    <Ionicons
                      name="md-trash-outline"
                      size={25}
                      color="#f64c75"
                    />
                     <MaterialIcons
                      name="done"
                      size={25}
                      color="#18D414"
                      onPress={() => finalizaTask(item)}
                    />

                  </TouchableOpacity>
                </View>
              )}
            />
          </View>

          <View style={styles.Form}>
            <TextInput
              style={styles.Input}
              placeholderTextColor="#999"
              autoCorrect={true}
              value={newTask}
              placeholder="Adicione uma tarefa"
              maxLength={100}
              onChangeText={text => setNewTask(text)}
            />
            <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
              <Ionicons name="ios-add" size={25} color="white"  style={styles.txtbottons}/>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default TelaLista;

const styles = StyleSheet.create({
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
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#eee"
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eee"
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
    borderRadius: 30,
    backgroundColor: "white",
    shadowColor: '#171717',
    shadowBox: '3px 5px 2px',
    shadowRadius: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: '#18D414'
  },
btnSubmit:{
    height: 40,
    width: 80,
    justifyContent: "center",
    alignitens: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10
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

