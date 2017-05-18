const register = (email, name, password) => (
    fetch('http://192.168.56.1/api/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, name, password })
    }) // eslint-disable-line
    .then(res => res.text())
);
//post register len sever
module.exports = register;
