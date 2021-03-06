import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
import refreshToken from '../api/refreshToken';

// an statusbar
StatusBar.setHidden(true);

export default class App extends Component {
    componentDidMount() {
        setInterval(refreshToken, (604800));
    }
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <Navigator
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN':
                            return <Main navigator={navigator} />;
                        case 'CHANGE_INFO':
                            return <ChangeInfo navigator={navigator} user={route.user} />;
                        case 'AUTHENTICATION':
                            return <Authentication navigator={navigator} />;
                        default:
                            return <OrderHistory navigator={navigator} />;
                    }
                }}

            // chuyen man hinh sang ben trai
            /*configureScene={route => {
                if (route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
                return Navigator.SceneConfigs.FloatFromLeft;
            }}*/
            />
        );
    }
}
