import { View, StyleSheet } from 'react-native';
import { Title } from './Title';
import { Circle } from './Circle';

export function Story(props) {
    const { wid, heig, bgc } = props;

    return (
        <View style={styles.sectionStory}>
            <Circle w={wid} h={heig} bgColor={bgc} />
            <Title w={wid} bgColor={bgc} />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionStory: {
        flex: 1,
        alignItems: 'center',
    },
});