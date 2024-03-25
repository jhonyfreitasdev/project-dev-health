import { View, Text } from 'react-native';

export default function ResultImc(props) {
    return (
        <View>
            <Text>{props.messageResultImc}</Text>   
            <Text>{props.result}</Text>
        </View>
    );
};