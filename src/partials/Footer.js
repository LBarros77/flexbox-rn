import { View } from 'react-native';
import { Story } from '../components/Story';

export function Footer() {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#3f79ab',
                maxHeight: '8%',
            }}
        >
            <Story wid={30} heig={30} bgc={'#4bc4cc'} />
            <Story wid={30} heig={30} bgc={'#4bc4cc'} />
            <Story wid={30} heig={30} bgc={'#4bc4cc'} />
            <Story wid={30} heig={30} bgc={'#4bc4cc'} />
            <Story wid={30} heig={30} bgc={'#4bc4cc'} />
        </View>
    );
};