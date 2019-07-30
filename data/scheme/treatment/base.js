const moment = require('moment')
const merge = require('lodash/merge')
const {collectionName, date1} = require('../util')

const TreatmentBaseScheme = {
    [collectionName]: 'treatments',
    treatmentId: {
        readKey: 'TreatmentID',
    },
    patientId: {
        readKey: 'PatientID',
        type: Number,
    },
    startDate: {
        readKey: 'StartDate',
        process: date1,
    },
    endDate: {
        readKey: 'EndDate',
        process: date1,
    },
    displayName: {
        readKey: 'DisplayName',
    },
    cyclesDays: {
        // just an example to process complex data (i dont know what cycleXDays really means :))
        readKey: 'CyclesXDays',
        process: value => {
            if (typeof value !== 'string') {
                return ''
            }

            return value.replace(/(\d+)X(\d+)/g, (m, g1, g2) => {
                return Number(g1) * Number(g2)
            })
        },
        type: Number,
    },
}

module.exports = TreatmentBaseScheme
