// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firebase from 'firebase'
import * as React from 'react'

export const useFirebaseUser = () => {
  const [firebaseUser, setFirebaseUser] = React.useState<any | undefined>(
    undefined
  )

  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setFirebaseUser(user ?? undefined)
    })
  })

  return { firebaseUser }
}
