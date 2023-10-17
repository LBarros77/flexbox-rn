import { View } from "react-native";

export function Title(props) {
    const {w, bgColor} = props;
    
    return (
        <View
            style={{
                width: w,
                height: 5,
                borderRadius: 5,
                backgroundColor: bgColor,
                marginVertical: 5,
            }} />
    );
};
