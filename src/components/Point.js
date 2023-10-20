import { View } from 'react-native';

export function Point(actived) {
    const bgColor = (actived)? '#4bcfff':'#4bc4cc';

    return (
        <View
            style={{
                padding: 4,
                borderRadius: 200,
                backgroundColor: bgColor,
            }}
        />
    );
};
