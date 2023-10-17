import { View } from 'react-native';

export function Circle(props) {
    const { w, h, bgColor } = props;

    return (
        <View
            style={{
                width: w,
                height: h,
                backgroundColor: bgColor,
                borderRadius: 200,
            }}
        />
    );
};
