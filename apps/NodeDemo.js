import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
} from 'react-native';
import {Home} from './Home'

export default class NodeDemo extends Component {
    render() {
        let defaultName = 'Home';
        let defaultComponent = Home;
        return ( < Navigator initialRoute={
            {name: defaultName, component: defaultComponent}}
                             renderScene={
                                 (route, navigator) => {
                                     let Component = route.component;
                                     return <Component navigator={
                                         navigator
                                     }
                                     />
                                 }
                             }
            />
        );
    }
}