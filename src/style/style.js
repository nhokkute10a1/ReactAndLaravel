import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const productWidth = (width - 50) / 2;
const productHeight = (productWidth / 361) * 452;

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
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        //mo
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAFAF',
        justifyContent: 'center'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        color: '#9A9A9A'
    },
    //Top product
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: height / 15,
        justifyContent: 'center',
        paddingLeft: 10
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //dan gia tri hinh ra
        flexWrap: 'wrap',
    },
    title:
    {
        fontSize: 20,
        color: '#C4C4C4'
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingBottom: 20
    },
    productImage: {
        width: productWidth,
        height: productHeight,
    },
    productName: {
        paddingLeft: 10,
        color: '#B0B0B0',
        fontWeight: '500'
    },
    productPrice: {
        paddingLeft: 10,
        color: '#D1507F'
    },
    //menu
    menuContainer: {
        flex: 1,
        backgroundColor: '#16A085',
        //cach menu ra 
        borderRightWidth: 3,
        borderColor: '#FFF',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30

    },
    btnStyle: {
        height: 40,
        paddingHorizontal: 70,
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSignInStyle: {
        height: 50,
        width: 200,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 10,
        paddingLeft: 10
    },
    btnText: {
        color: '#16A085',
        fontSize: 20
    },
    btnTextSignIn: {
        color: '#16A085',
        fontSize: 15,
    },
    loginContainer: {
        flex: 1,
        //justifyContent: 'space-between',
        alignItems: 'center'
    },
});
export default styles;
