import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from 'react-native';
import ResultImc from '../ResultImc';
import styles from './style';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso de altura');
    const [imc, setImc] = useState(null);
    const [heightError, setHeightError] = useState(null);
    const [weightError, setWeightError] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    const imcCalculator = () => setImc((weight / (height * height)).toFixed(2));

    const verificationImc = () => {
        const messageError = 'Campo obrigatório';

        if (!height) {
            setHeightError(messageError);
            Vibration.vibrate();
        } else setHeightError(null);

        if (!weight) {
            setWeightError(messageError);
            Vibration.vibrate();
        } else setWeightError(null);
    };

    const validationImc = () => {
        if (!!height && !!weight) {
            imcCalculator();
            setMessageImc('Seu imc é igual:');
            setWeight(null);
            setHeight(null);
            setTextButton('Calcular novamente');
            return verificationImc();
        };

        if (textButton === 'Calcular') verificationImc();
        setMessageImc('Preencha o peso de altura');
        setTextButton('Calcular');
        setImc(null);
    };

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{heightError}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex: 1.75'
                    keyboardType='numeric'
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{weightError}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex: 82.50'
                    keyboardType='numeric'
                />

                <TouchableOpacity onPress={validationImc} style={styles.buttonCalculator}>
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} result={imc} />
        </Pressable>
    );
};
