import { View, Text } from 'react-native';

export default function ResultImc(props) {
    return (
        <View>
            <Text>{props.result}</Text>
            <Text>{props.messageResultImc}</Text>
        </View>
    );
};