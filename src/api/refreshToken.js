import saveToken from './saveToken';
import getToken from './getToken';

const getNewToken = (token) => (
    fetch('http://192.168.56.1/api/refresh_token.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    }) // eslint-disable-line
    .then(res => res.text())
);
const refreshToken = async () => {
    try {
        const token = await getToken();
        if (token === '' || token === 'TOKEN_KHONG_HOP_LE') {
            console.log('Chua co token');
        }
        const newToken = await getNewToken(token);
        await saveToken(newToken);
        console.log('TOKEN MOI: ' + newToken);
    } catch (error) {
        console.log(error);
    }
};
export default refreshToken;
