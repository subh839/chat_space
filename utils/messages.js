const moment = require('moment');

const formatMessage = (username, text) => {
    return {
        username,
        text,
        time: moment().utcOffset(330).format('h:mm a')
    }
};

module.exports = formatMessage;