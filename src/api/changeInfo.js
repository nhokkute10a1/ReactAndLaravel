const changeInfo = (token, name, address, phone) => (
    fetch('http://192.168.56.1/api/change_info.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token, name, address, phone })
    }) // eslint-disable-line
    .then(res => res.json())
);
//post register len sever
module.exports = changeInfo;
