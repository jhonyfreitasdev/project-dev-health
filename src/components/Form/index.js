import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultImc from '../ResultImc';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso de altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular ');

    const imcCalculator = () => setImc((weight / (height * height)).toFixed(2));
    const validation = () => {
        if (!!weight && !!height) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc('Seu imc é igual:');
            setTextButton('Calcular novamente');
            return 
        };
        setImc(null);
        setMessageImc('Preencha o peso de altura');
        setTextButton('Calcular');
    };
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex: 1.75'
                    keyboardType='numeric'
                />

                <Text>Altura</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex: 82.50'
                    keyboardType='numeric'
                />

                <Button title={textButton} onPress={validation} />
                <ResultImc messageResultImc={messageImc} result={imc} />
            </View>
            <ResultImc />
        </View>
    );
};