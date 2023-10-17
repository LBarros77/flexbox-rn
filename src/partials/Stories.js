import { View, StyleSheet } from "react-native";
import { Story } from "../components/Story";

export function Stories() {
    return (
        <View style={styles.section}>
            <Story wid={40} heig={40} bgc={'#3f79ab'}/>
            <Story wid={40} heig={40} bgc={'#3f79ab'}/>
            <Story wid={40} heig={40} bgc={'#3f79ab'}/>
            <Story wid={40} heig={40} bgc={'#3f79ab'}/>
            <Story wid={40} heig={40} bgc={'#3f79ab'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});