const moment = require('moment')

module.exports = {
    collectionName: Symbol(),
    date1: value => {
        return moment(value, 'M/D/YYYY').format('YYYY-MM-DD')
    },
}
