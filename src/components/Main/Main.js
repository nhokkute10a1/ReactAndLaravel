import React, { Component } from 'react';
import Drawer from 'react-native-drawer';

//An stastusbar ios
// StatusBar.setHidden(true);
import Menu from './Menu';
import Shop from './Shop/Shop';
import checkLogin from '../../api/checkLogin';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE0OTUwNzM1MTYsImV4cGlyZSI6MTQ5NTI0NjMxNn0.V8UIiQoknAE2eMIrXZq1KuooJjrN7PYkn2R7mcWiNy0';

export default class Main extends Component {
    // mo ra lun menu
    // componentDidMount() {
    //    this.drawer.open();
    // }
    componentDidMount() {
        checkLogin(token)
        .then(res => console.log('Check-login', res))
        .catch(error => console.log(error));
    }
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };
    
    render() {
        const { navigator } = this.props;
        return (
            <Drawer
                /*side="right"*/
                openDrawerOffset={0.3} // 20% gap on the right side of drawer
                tapToClose
                ref={(ref) => { this.drawer = ref; }}
                content={
                    <Menu navigator={navigator} />
                }
            >
                <Shop open={this.openControlPanel.bind(this)} />

            </Drawer>
        );
    }
}

