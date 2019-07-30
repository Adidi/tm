const express = require('express')
const router = express.Router()
const busboyPromise = require('./busboy-promise')
const processRows = require('../data/process')
const {collectionName} = require('../data/scheme/util')
const schemeMap = require('../data/scheme')

const getScheme = filename => {
    const matches = filename.toLowerCase().match(/hospital_(\d+)_([^\.]+)/)
    if (matches) {
        const [all, hospitalId, dataType] = matches
        return schemeMap[`${dataType}${hospitalId}`]
    }
    return null
}

router.post('/', async (req, res) => {
    try {
        const data = await busboyPromise(req)
        res.end()

        for (const item of data) {
            const {filename, streamReader} = item
            const scheme = getScheme(filename)

            if (scheme) {
                const rows = []
                // TODO: write to database in batch of some number and not one by one
                for await (const chunk of streamReader) {
                    rows.push(chunk)
                }

                console.log('Write to DB:', scheme[collectionName])
                console.log(processRows(rows, scheme))
            } else {
                // log some error
            }
        }
    } catch (ex) {
        res.status(501)
        throw ex
    }
})

module.exports = router
