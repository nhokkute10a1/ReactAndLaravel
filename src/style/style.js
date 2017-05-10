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
    //authentication
    authentication: {
        flex: 1,
        backgroundColor: '#16A085',
        padding: 20,
        justifyContent: 'space-between',

    },
    iconStyleAuthe: {
        width: 30,
        height: 30
    },
    rowAuthen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyleAuthe: {
        color: '#FFF',
        fontSize: 25
    },
    controlStyle: {
        flexDirection: 'row',
        // rong full man hinh
        alignSelf: 'stretch'
    },
    signInStyle: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signOutStyle: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },
    inActiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#16A085'
    },
    inputStyle: {
        backgroundColor: '#FFF',
        height: 50,
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 30
    },
    btnsignIn: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    //list product
    containerList: {
        flex: 1,
        backgroundColor: '#E7E7E7'
    },
    wapperList: {
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 5,
    },
    header: {
        height: height / 13,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    iconBack: {
        width: 30,
        height: 30
    },
    titleStyleList: {
        color: '#C84182',
        fontSize: 20
    },
    containerPro: {
       flexDirection: 'row',
       padding: 10,
       borderTopColor: '#E7E7E7',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
        paddingVertical: 15
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 10,
        flex: 1 
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagePro: {
        width: 90,
        height: (90 * 452) / 361
    },
    txtName: {
        color: '#ECECEC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        color: '#C83D80'
    },
    txtShowDetail: {
        color: '#D09DB7',
        fontSize: 12
    }
});
export default styles;
