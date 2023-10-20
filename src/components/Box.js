import React from 'react';
import { View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    iconGenerator() {
        switch(this.props.icon) {
            case 'row-back':
                return <Ionicons name={this.props.icon} size={24} color="black" />;
            case 'iconfontdesktop':
                return <AntDesign name={this.props.icon} size={50} color="black" />;
            default:
                return <Ionicons name={this.props.icon} size={24} color="black" />;
        }
    }

    render() {
        return (
            <View 
                style={{
                    paddingHorizontal: this.props.w,
                    paddingVertical: this.props.h,
                    borderRadius: 5,
                    backgroundColor: this.props.bgColor,
                }}
            >
                {this.iconGenerator()}
            </View>
        )
    }
}
