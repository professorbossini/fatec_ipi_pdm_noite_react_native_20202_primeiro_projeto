import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component{
 
  constructor (props){
    super (props);
    this.state = {
      texto: "Texto Inicial",
      contador: 0
    };
  }
  render (){
    return (
      <View style={estilos.container}>
        <Text>{this.state.contador}</Text>
        <Button 
          title="Incrementar"
          onPress={() => this.setState({contador: this.state.contador + 1})}
        />
      </View>
    );
  }
}


/*export default function App() {
  const[texto, setTexto] = useState ("Texto inicial");
  return (
    <View style={estilos.container}>
      <Text>{texto}</Text>
      <Button 
        title="Alterar texto"
        onPress={() => {setTexto("Novo texto")}} 
      />
      
    </View>
  );
}*/

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
