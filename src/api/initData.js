const initData = () => (
    // lay dia chi ip cua may tinh ( vitual )
    fetch('http://192.168.56.1/api/') // eslint-disable-line
        .then(res => res.json())
    //tra ve cai promid
);
export default initData;
