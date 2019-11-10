import * as algoliasearch from 'algoliasearch'
import * as functions from 'firebase-functions'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const APP_ID = functions.config().algolia.app
const ADMIN_KEY = functions.config().agolia.key

const client = algoliasearch(APP_ID, ADMIN_KEY)
const index = client.initIndex('recipes')
