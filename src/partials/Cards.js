import { View, StyleSheet } from 'react-native';
import { Box } from '../components/Box';
import { Title } from '../components/Title';

export function Cards() {
    return (
        <View style={styles.section}>
            <View>
                <Box w={50} h={45} bgColor={'#4bc4cc'} />
                <View>
                    <Title w={100} bgColor={'#4bc4cc'} />
                    <Title w={80} bgColor={'#4bc4cc'} />
                </View>
            </View>
            <View>
                <Box w={50} h={45} bgColor={'#4bc4cc'} />
                <View>
                    <Title w={100} bgColor={'#4bc4cc'} />
                    <Title w={80} bgColor={'#4bc4cc'} />
                </View>
            </View>
            <View>
                <Box w={50} h={45} bgColor={'#4bc4cc'} />
                <View>
                    <Title w={100} bgColor={'#4bc4cc'} />
                    <Title w={80} bgColor={'#4bc4cc'} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        aliginItems: 'center',
        padding: 15,
        paddingRight: 0,
    }
})