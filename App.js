import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {

  const [Idade, setIdade] = useState("");
  const [Altura, setAltura] = useState("");
  const [Peso, setPeso] = useState("");
  const [Sexo, setSexo] = useState("");
  const [Resultado, setResultado] = useState("");
    const Calcular = () => {
    if (Sexo == 'Mulher'){
      const ResultadoMulherTMB = 447.6 + (9.2 * Peso) + (3.1 * Altura) - (4.3 * Idade);
      setResultado (ResultadoMulherTMB);
    }
    else{
      const ResultadoHomemTMB = 88.36 + (13.4 * Peso) + (4.8 * Altura) - (5.7 * Idade);
      setResultado (ResultadoHomemTMB);
    }
    if (Resultado > 2500){
      alert(`TMB Muito Alta ${Resultado}`)
    }
    else if (Resultado < 1100){
      alert(`TMB Muito Baixa ${Resultado}`)
    }
    else{
      alert(`TMB Normal ${Resultado}`)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
      placeholder="Qual seu Sexo? (Digite Mulher ou Homem)"
      onChangeText={(pSexo) => setSexo(pSexo)}
      />
      <TextInput
      placeholder="Qual sua Idade?"
      onChangeText={(pIdade) => setIdade(pIdade)} 
      />
      <TextInput
      placeholder="Qual sua Altura em CM"
      onChangeText={(pAltura) => setAltura(pAltura)}
      />
      <TextInput
      placeholder="Qual seu Peso em KG"
      onChangeText={(pPeso) => setPeso(pPeso)}
      />
      <Button title="Calcular" onPress={Calcular} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#42b3f5',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  result: {
    marginTop: 20,
  },
});
