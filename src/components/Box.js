import { View } from 'react-native';

export function Box(props) {
    const { w, h, bgColor} = props;
    return (
        <View 
            style={{
                paddingHorizontal: w,
                paddingVertical: h,
                borderRadius: 5,
                backgroundColor: bgColor,
            }}
        />
    )
};