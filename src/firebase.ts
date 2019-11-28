import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/performance'

import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyBimMnf-n3EX8FuQLePP3hbng9463Ey-X0',
    authDomain: 'iib-swe-ws19.firebaseapp.com',
    databaseURL: 'https://iib-swe-ws19.firebaseio.com',
    projectId: 'iib-swe-ws19',
    storageBucket: 'iib-swe-ws19.appspot.com',
    messagingSenderId: '19201567715',
    appId: '1:19201567715:web:4ae20ff8b578c8186a8ed6',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().enablePersistence({ synchronizeTabs: true })

const firestore = firebase.firestore()
const storage = firebase.storage()
const storageRef = storage.ref()
const auth = firebase.auth()
const performance = firebase.performance()

const createTimestampFromDate = (date: Date) => firebase.firestore.Timestamp.fromDate(date)
const createDateFromTimestamp = (timestamp: firebase.firestore.Timestamp) =>
    new firebase.firestore.Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate()
const incrementBy = (value: number) => firebase.firestore.FieldValue.increment(value)

export const FirebaseService = {
    firestore,
    storage,
    storageRef,
    auth,
    createTimestampFromDate,
    createDateFromTimestamp,
    incrementBy,
    performance,
    firebaseConfig,
}
