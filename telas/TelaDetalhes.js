import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-paper';

const TelaDetalhes = ({route, navigation}) => {
  const telas = route.params;

  return(
    <View>
      <Card>
        <Card.Title title={telas.nome} subtitle={telas.id}/>
      </Card>
    </View>
  );
}

export default TelaDetalhes;