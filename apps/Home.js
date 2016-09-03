import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
} from 'react-native';
import HomeS from './HomeS'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const {
            navigator
        } = this.props;
        if (navigator) {
            navigator.push({
                name: 'HomeS',
                component: HomeS,
            });
        }
    }

    render() {
        return ( < View >
                < TouchableOpacity onPress={
                    this._pressButton.bind(this)
                }>
                    < Text > 点我跳转 </Text> </TouchableOpacity> </View>
        );
    }
}