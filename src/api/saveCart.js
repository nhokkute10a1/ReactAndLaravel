import { AsyncStorage } from 'react-native';

const saveCart = async (cartArray) => {
    // setItem chi luu gia tri dang chuoi or doi thanh dang chuoi
    await AsyncStorage.setItem('@cart', JSON.stringify(cartArray));
};

export default saveCart;
