const moment = require('moment')
const {collectionName, date1} = require('../util')

const PatientBaseScheme = {
    [collectionName]: 'patients',
    patientId: {
        readKey: 'PatientID',
        type: Number,
    },
    MRN: {
        readKey: 'MRN',
        type: Number,
    },
    patientDOB: {
        readKey: 'PatientDOB',
        process: date1,
    },
    deceased: {
        readKey: 'IsDeceased',
        process: value => (value === 'Active' ? true : false),
    },
    lastName: {
        readKey: 'LastName',
    },
    firstName: {
        readKey: 'FirstName',
    },
    address: {
        readKey: 'Address',
    },
    city: {
        readKey: 'City',
    },
}

module.exports = PatientBaseScheme
