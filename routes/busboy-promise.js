const Busboy = require('busboy')
const csv = require('fast-csv')

module.exports = req => {
    return new Promise((resolve, reject) => {
        try {
            var busboy = new Busboy({headers: req.headers})
            const data = []
            busboy.on('file', async function(
                fieldname,
                file,
                filename,
                encoding,
                mimetype,
            ) {
                const streamReader = file.pipe(csv.parse({headers: true}))
                data.push({
                    streamReader,
                    filename,
                })
            })

            busboy.on('finish', function() {
                resolve(data)
            })

            req.pipe(busboy)
        } catch (ex) {
            reject(ex)
        }
    })
}
