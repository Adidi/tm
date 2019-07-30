const merge = require('lodash/merge')
const TreatmentBaseScheme = require('./base')

const Hospital2TreatmentScheme = {
    treatmentId: {
        readKey: 'TreatmentId',
    },
    patientId: {
        readKey: 'PatientId',
    },
    cyclesDays: {
        readKey: 'NumberOfCycles',
    },
}

module.exports = merge(TreatmentBaseScheme, Hospital2TreatmentScheme)
