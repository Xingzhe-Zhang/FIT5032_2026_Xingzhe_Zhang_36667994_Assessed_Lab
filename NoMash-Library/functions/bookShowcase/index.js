const admin = require('firebase-admin')
const http = require('http')

function getFirestore() {
  if (!admin.apps.length) {
    const serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT_JSON
    )

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
  }

  return admin.firestore()
}

async function getBookShowcase() {
  const snapshot = await getFirestore().collection('books').get()
  const books = snapshot.docs.map((document) => document.data())

  return {
    featuredBook: books[0] || null,
    books
  }
}

const server = http.createServer(async (request, response) => {
  response.setHeader('access-control-allow-origin', '*')
  response.setHeader('access-control-allow-methods', 'GET,OPTIONS')
  response.setHeader('access-control-allow-headers', 'content-type')

  if (request.method === 'OPTIONS') {
    response.writeHead(204)
    response.end()
    return
  }

  const isConsoleTest = request.method === 'POST' && request.url === '/invoke'

  if (request.method !== 'GET' && !isConsoleTest) {
    response.writeHead(405, { 'content-type': 'application/json' })
    response.end(JSON.stringify({ error: 'Method not allowed.' }))
    return
  }

  try {
    const result = await getBookShowcase()
    response.writeHead(200, { 'content-type': 'application/json' })
    response.end(JSON.stringify(result))
  } catch (error) {
    console.error('Error loading book showcase:', error)
    response.writeHead(500, { 'content-type': 'application/json' })
    response.end(JSON.stringify({ error: 'Unable to load the book showcase.' }))
  }
})

if (require.main === module) {
  const port = Number(process.env.PORT) || 9000
  server.listen(port, '0.0.0.0', () => {
    console.log(`bookShowcase is listening on port ${port}`)
  })
}

module.exports = { getBookShowcase }
