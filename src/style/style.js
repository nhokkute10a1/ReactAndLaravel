import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    //header
    wapper: {
        height: height / 8,
        padding: 10,
        justifyContent: 'space-around'
    },
    icon: {
        width: 25,
        height: 25
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: height / 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0
    },
    titleStyle: {
        color: '#FFF',
        fontSize: 20
    }
});
export default styles;
