import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from 'react-native';
import Calculator from 'react-native-vector-icons/AntDesign';

export function TelaApp() {
  const [opcao, setOpcao] = React.useState();
  const [peso, setPeso] = React.useState(0.00);
  const [altura, setAltura] = React.useState(0.00);
  const [imc, setImc] = React.useState(0.00);


  function calculadoraDoImc(peso, altura) {
    var resultado = peso / (altura * altura)
    setImc(resultado)
  }

  return (
    <View style={styles.totalBg}>
      <View style={styles.styleDaView}>

        <Text style={styles.textos}>Calculadora de IMC</Text>
        <Calculator name="calculator" size={40} color="black"/>
        <Text>{'\n'}</Text>

        <TextInput
          placeholder="Seu peso:"
          onChangeText={valor => setPeso(valor)}
          value={peso}
          style={styles.labelsPesoAltura}
        ></TextInput>

        <TextInput
          placeholder="Sua altura:"
          onChangeText={(valor) => setAltura(valor)}
          value={altura}
          style={styles.labelsPesoAltura}
        ></TextInput>
        <Text>{'\n'}</Text>

        <Picker
          selectedValue={opcao}
          style={{ height: 50, width: '50%', color: '#000' }}
          onValueChange={(itemValue) => setOpcao({ linguagem: itemValue })}>
          <Picker.Item label="Criança" value="crianca" />
          <Picker.Item label="Adulto" value="adulto" />
          <Picker.Item label="Idoso" value="idoso" />
        </Picker>

        <TouchableOpacity style={styles.botaoCalcular}
          onPress={() => calculadoraDoImc(peso, altura)}>
          <Text style={{ fontSize: 20, color: '#ccc' }}>Calcular</Text>
        </TouchableOpacity>

        <Text>{'\n'}</Text>
        <Text style={styles.textos}>IMC: {imc.toFixed(2)} </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelsPesoAltura: {
    backgroundColor: '#858585',
    borderRadius: 8,
    width: '80%',
    height: '12%',
    textAlign: 'center',
    fontSize: 20,
    elevation: 10,
  },
  textos: {
    textAlign: 'center',
    fontSize: 28,
  },
  styleDaView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    height: '90%',
    width: '90%',
    elevation: 15,
    borderRadius: 30,
  },
  totalBg: {
    backgroundColor: '#cccccc',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoCalcular: {
    backgroundColor: '#858585',
    elevation: 10,
    borderRadius: 15,
    width: '60%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});