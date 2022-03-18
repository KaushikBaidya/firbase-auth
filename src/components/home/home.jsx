import React, { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import styles from './home.module.css'

const Home = (props) => {
  const [errorMsg, setErrorMsg] = useState('')
  console.log(props)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setErrorMsg('')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className={styles.container}>
      <h2>{props.name ? `Welcome - ${props.name}` : 'Login please'}</h2>
      {props.name && <button onClick={handleSignOut}>Sign out</button>}
    </div>
  )
}

export default Home
