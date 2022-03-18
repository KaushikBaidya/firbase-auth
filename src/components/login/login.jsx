import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import styles from './login.module.css'
import InputControl from '../InputControl/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.js'

const Login = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: '',
    pass: '',
  })

  const [errorMsg, setErrorMsg] = useState('')
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg('Fill all fields')
      return
    }
    setErrorMsg('')

    setSubmitButtonDisabled(true)
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false)

        navigate('/')
      })
      .catch((err) => {
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message)
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.value.target }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, pass: e.value.target }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Login
          </button>
          <p>Don't have an account</p>
          <span>
            <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
