const getOrderHistory = (token) => (
    fetch('http://192.168.56.1/api/order_history.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    }) // eslint-disable-line
    .then(res => res.json())
);
//post register len sever
module.exports = getOrderHistory;
