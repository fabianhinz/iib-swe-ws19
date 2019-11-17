import * as algoliasearch from 'algoliasearch'
import * as functions from 'firebase-functions'

const client = algoliasearch('OQ8JBQL1SQ', '1242b033e25e82b9d64d1a8ea92c9fec')
const index = client.initIndex('recipes')

exports.addToIndex = functions.firestore.document('recipes/{recipesId}').onCreate(snapshot => {
    const data = snapshot.data()
    const objectID = snapshot.id

    return index.addObject({ ...data, objectID })
})

exports.updateIndex = functions.firestore.document('recipes/{recipesId}').onUpdate(change => {
    const newData = change.after.data()
    const objectID = change.after.id
    return index.saveObject({ ...newData, objectID })
})

exports.deleteFromIndex = functions.firestore
    .document('recipes/{recipesId}')
    .onDelete(snapshot => index.deleteObject(snapshot.id))
