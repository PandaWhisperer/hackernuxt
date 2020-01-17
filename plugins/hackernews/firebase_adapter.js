import firebase from 'firebase/app'
import 'firebase/database'

export default function(url) {
  let app

  try {
    app = firebase.app()
  } catch {
    app = firebase.initializeApp({ databaseURL: url })
  }

  return app.database()
}
