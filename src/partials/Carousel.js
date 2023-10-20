import { View, StyleSheet } from 'react-native';
import { Point } from '../components/Point';
import { Box } from '../components/Box';

export function Carousel() {
    return (
        <View style={styles.section}>
            <Box w={170} h={95} bgColor={'#4bc4cc'} icon={'iconfontdesktop'} />
            <View style={styles.scrollBottom}>
                <Point />
                <Point actived={true} />
                <Point />
                <Point />
                <Point />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f79ab',
        minHeight: '15%',
        paddingTop: 10,
    },
    scrollBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 80,
    }
})