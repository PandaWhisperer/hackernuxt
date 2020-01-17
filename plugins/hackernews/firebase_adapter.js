import firebase from 'firebase/app'
import 'firebase/database'

export default function(url) {
  const app = firebase.initializeApp({ databaseURL: url })
  const db  = app.database()

  return db
}
