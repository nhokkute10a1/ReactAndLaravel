import React, { Component } from 'react';
import Drawer from 'react-native-drawer';

//An stastusbar ios
// StatusBar.setHidden(true);
import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {
    // mo ra lun menu
    // componentDidMount() {
    //    this.drawer.open();
    // }
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

