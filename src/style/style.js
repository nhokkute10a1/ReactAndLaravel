import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const imageWidth = width - 40 ;
const imageHeight = ( imageWidth / 933) *465;

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
    },
    //collection
    //933x465 - kich thuoc hinh 
    wapperColl: {
        height: height * 0.33,
        backgroundColor: '#FFF',
        margin: 10,
        //mo
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAFAF',
        justifyContent: 'center'
    },
    imageStyle: {
         height: imageHeight, 
         width: imageWidth
    }
});
export default styles;
