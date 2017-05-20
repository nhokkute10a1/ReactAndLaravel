const sendOrder = (token, arrayDetail) => (
    fetch('http://192.168.56.1/api/cart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token, arrayDetail })
    }) // eslint-disable-line
    .then(res => res.text())
);
//post register len sever
module.exports = sendOrder;
