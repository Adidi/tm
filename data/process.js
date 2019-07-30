const PatientBaseScheme = require('./scheme/patient/base')

const isEmptyValue = value => {
    value = typeof value === 'string' && value.trim()
    if (value === '') {
        return true
    }

    if (/null/i.test(value)) {
        return true
    }

    return false
}

const processRow = (row, scheme) => {
    const obj = {}

    for (const key in scheme) {
        const schemeField = scheme[key]
        const {readKey, process, type} = schemeField
        const rawValue = row[schemeField.readKey]
        let value
        if (isEmptyValue(rawValue)) {
            value = ''
        } else {
            value = process ? process(rawValue) : rawValue
        }

        if (type) {
            value = type(value)
        }

        obj[key] = value
    }

    return obj
}

const processRows = (rows, scheme) => {
    const dbRows = []
    for (const row of rows) {
        dbRows.push(processRow(row, scheme))
    }

    return dbRows
}

module.exports = processRows
