import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ResultImc from '../ResultImc';
import styles from './style';

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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex: 1.75'
                    keyboardType='numeric'
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex: 82.50'
                    keyboardType='numeric'
                />
                <TouchableOpacity onPress={validation} style={styles.buttonCalculator}>
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} result={imc} />
        </View>
    );
};
