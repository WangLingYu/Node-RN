import React, {
    Component
} from 'react';
import {
    View,
    Navigator,
    Text,
    TouchableOpacity,
} from 'react-native';

import Home from './Home';

export default class HomeS extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const {
            navigator
        } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return ( < View >
                < TouchableOpacity onPress={
                    this._pressButton.bind(this)
                }>
                    < Text > 点我跳回去 </Text> </TouchableOpacity> </View>
        );
    }
}