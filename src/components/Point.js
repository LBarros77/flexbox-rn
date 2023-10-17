import { StyleSheet, View } from 'react-native';

export function Point() {
    return (
        <View style={styles.circle} />
    );
};

const styles = StyleSheet.create({
    circle: {
        padding: 4,
        borderRadius: 100,
        backgroundColor: '#4bc4cc',
    }
});