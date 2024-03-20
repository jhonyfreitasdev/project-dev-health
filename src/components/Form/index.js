import React from 'react'; 
import { View, Text, TextInput, Button } from 'react-native';
import ResultImc from './Result-imc/';

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                placeholder='Ex: 1.75'
                keyboardType='numeric'
                />

                <Text>Altura</Text>
                <TextInput 
                placeholder='Ex: 1.75'
                keyboardType='numeric'
                />

                <Button title="Calcular IMC"/> 
            </View>
            <ResultImc />
        </View>
    );
};