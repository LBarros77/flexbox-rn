import { View, StyleSheet } from 'react-native';
import { Title } from '../components/Title';
import { Box } from '../components/Box';

export function Article() {
    return (
        <View style={styles.article}>
            <View style={styles.section}>
                <View style={{width: '60%'}}>
                    <Title w={200} bgColor={'#4bc4cc'} />
                    <Title w={140} bgColor={'#4bc4cc'} />
                </View>
                <View style={{width: '35%'}}>
                    <Box w={15} h={40} bgColor={'#4bc4cc'} />
                    <View style={styles.subTitle} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    article: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#3f79ab',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    column: {
        width: '50%'
    },
    subTitle: {
        width: 110,
        height: 20,
        borderRadius: 5,
        backgroundColor: '#3f79cb',
        position: 'absolute',
        top: 70,
        left: 15,
    }
});