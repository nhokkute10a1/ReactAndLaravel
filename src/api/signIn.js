const signIn = (email, password) => (
    fetch('http://192.168.56.1/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    }) // eslint-disable-line
    .then(res => res.json())
);
//post register len sever
module.exports = signIn;
