import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Vibration,
	Pressable,
	Keyboard,
	FlatList
} from 'react-native';
import ResultImc from '../ResultImc';
import styles from './style';

export default function Form() {
	const [height, setHeight] = useState(null);
	const [weight, setWeight] = useState(null);
	const [imc, setImc] = useState(null);
	const [heightError, setHeightError] = useState(null);
	const [weightError, setWeightError] = useState(null);
	const [textButton, setTextButton] = useState('Calcular');
	const [imcList, setImcList] = useState([]);

	const imcCalculator = () => {
		const heightFormated = height.replace(",", ".")
		const imcValue = ((weight / (heightFormated * heightFormated)).toFixed(2));
		setImc(imcValue);
		setImcList(arr => [{ id: new Date().getTime(), imc: imcValue }, ...arr])
	}

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
			setWeight(null);
			setHeight(null);
			setTextButton('Calcular novamente');
			return verificationImc();
		};

		if (textButton === 'Calcular') verificationImc();
		setTextButton('Calcular');
		setImc(null);
	};

	return (
		<>
			{!imc
				? (
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
					</Pressable>
				)
				: (
					<View style={styles.imcContext}>
						<ResultImc result={imc} />

						<TouchableOpacity onPress={validationImc} style={styles.buttonCalculator}>
							<Text style={styles.textButtonCalculator}>
								{textButton}
							</Text>
						</TouchableOpacity>

						<FlatList
							data={imcList}
							style={styles.list}
							showsVerticalScrollIndicator={false}
							keyExtractor={item => item.id}
							renderItem={({ item }) => (
								<Text style={styles.resultContainer}>
									<Text style={styles.label}> Resultado IMC = </Text>
									{item.imc}
								</Text>
							)}
						/>
					</View>
				)
			}
		</>
	);
};
