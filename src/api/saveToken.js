import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
    // setItem chi luu gia tri dang chuoi or doi thanh dang chuoi
    await AsyncStorage.setItem('@token', token);
};

export default saveToken;
