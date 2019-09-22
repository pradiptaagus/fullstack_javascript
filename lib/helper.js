const helper = {
    generateTimeStamp() {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let date = d.getDate();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let second = d.getSeconds();
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    }
}

module.exports = helper;