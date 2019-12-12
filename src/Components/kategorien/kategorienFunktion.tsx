import algoliasearch from 'algoliasearch/lite'
//import firestore from 'firebase'

const searchClient = algoliasearch('OQ8JBQL1SQ', '685ad40e0ddfa41ec3b7bf9605294351')
export const index = searchClient.initIndex('recipes')

export default function kategorienFilter() {
    let list = index.search('').then(result => result.hits)
    console.log(list)

    index.search('').then(result => console.log(result.hits))
}
