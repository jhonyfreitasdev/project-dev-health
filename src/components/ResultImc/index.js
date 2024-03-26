import { View, Text } from 'react-native';
import styles from './style';

export default function ResultImc({messageResultImc, result}) {
    return (
        <View style={styles.imcContainer}>
            <Text style={styles.information}>{messageResultImc}</Text>   
            <Text style={styles.imcNumber}>{result}</Text>
        </View>
    );
};