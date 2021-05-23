let express = require('express')
const md5 = require('md5')
const fs = require('fs')
const upload = require('express-fileupload')

let port = 8000
let app = express()

async function main() {

  app.post('/query', async (request, response) => { await answerQuery(request, response) })
  app.use(express.static('./public'))

  app.listen(port, () => {
    console.log(`Navigate to: http://localhost:${port}`)
  })
}

main()

async function answerQuery(request, response) {
  let data = await getPostData(request)
  let rst = {}

  if (data.type == 'SaveUserData') {
    rst = { status: 'ok' }
    data.contrasenya = md5(data.contrasenya)
    userData(data)
    userData1(data)
    console.log(data)
  }

  else if (data.type == 'appLogIn') {
    rst = { status: 'ok' }
    console.log(data)
  }

  else {
    rst = { status: 'Ko' }
  }

  response.json(rst)

}

// Save user regiter info
async function userData(text) {
  let fileData = await fs.promises.readFile('public/JavaScript/UserRegistracion.json')
  let fileObject = JSON.parse(fileData)
  fileObject.push(text)

  let data1 = JSON.stringify(fileObject, '\t', 2);
  await fs.promises.writeFile('public/JavaScript/UserRegistracion.json', '\n' + data1);
}


async function userData1(text) {
  let fileData = await fs.promises.readFile('public/JavaScript/UserRegistracion.json')
  let fileObject = JSON.parse(fileData)
  fileObject.push(text)

  let data = 'let b = ' + JSON.stringify(fileObject, '\t', 2);
  await fs.promises.writeFile('public/JavaScript/UserRegistracion.js', '\n' + data);
}

// Transforma la petició 'POST' en un objecte de dades
async function getPostData(request) {
  return new Promise(async (resolve, reject) => {
    let body = '',
      error = null

    request.on('data', (data) => { body = body + data.toString() })
    request.on('close', () => { /* TODO - Client closed connection, destroy everything! */ })
    request.on('error', (err) => { error = 'Error getting data' })
    request.on('end', async () => {
      if (error !== null) {
        console.log('Error getting data from post: ', error)
        return reject(error)
      } else {
        try {
          return resolve(JSON.parse(body))
        } catch (e) {
          console.log('Error parsing data from post: ', error)
          return reject(e)
        }

      }
    })
  })
}