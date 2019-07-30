const merge = require('lodash/merge')
const PatientBaseScheme = require('./base')

const Hospital2PatientScheme = {
    patientId: {
        readKey: 'PatientId',
    },
    deceased: {
        readKey: 'IsPatientDeceased',
        process: value => (value === 'Y' ? true : false),
    },
    address: {
        readKey: 'AddressLine',
    },
    city: {
        readKey: 'AddressCity',
    },
}

module.exports = merge(PatientBaseScheme, Hospital2PatientScheme)
