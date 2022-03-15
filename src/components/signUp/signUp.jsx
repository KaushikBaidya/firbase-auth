import React, { useState } from 'react'
import styles from './signUp.module.css'
import InputControl from '../InputControl/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'

const SignUp = () => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    pass: '',
  })

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg('Fill all fields')
      return
    }
    setErrorMsg('')

    setSubmitButtonDisabled(true)

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false)
        const user = res.user
        await updateProfile(user, { displayName: values.name })
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
        <h1 className={styles.heading}>Sign Up</h1>
        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter Password"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, pass: e.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Sign up
          </button>
          <p>Already have an account</p>
          <span>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SignUp
