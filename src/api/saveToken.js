import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
    try {
        // setItem chi luu gia tri dang chuoi or doi thanh dang chuoi
        await AsyncStorage.setItem('@token', token);
        return 'THANH_CONG';
    } catch (e) { 
        return e;
    }
};

export default saveToken;
