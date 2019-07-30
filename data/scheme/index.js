const hospitals = [1, 2]

module.exports = hospitals.reduce((map, hospitalId) => {
    map[`patient${hospitalId}`] = require(`./patient/hospital${hospitalId}`)
    map[`treatment${hospitalId}`] = require(`./treatment/hospital${hospitalId}`)
    return map
}, {})
