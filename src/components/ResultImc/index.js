import { View, Text, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultImc({ messageResultImc, result }) {
    const onShare = async () => {
        const res = await Share.share({
            message: `Meu imc hoje é ${result}`
        });
    };

    return (
        <View style={styles.imcContainer}>
            {result &&
                <View style={styles.shareButtonContainer}>
                    <TouchableOpacity style={styles.sharedButton}>
                        <Text style={styles.sharedText} onPress={onShare}>
                            Compartilhar
                        </Text>
                    </TouchableOpacity>
                </View>
            }
            <Text style={styles.information}>{messageResultImc}</Text>
            <Text style={styles.imcNumber}>{result}</Text>
        </View>
    );
};
