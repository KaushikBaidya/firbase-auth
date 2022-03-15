import React, { useState } from 'react'
import styles from './signUp.module.css'
import InputControl from '../InputControl/InputControl'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [values, SetValues] = useState({
    name: '',
    email: '',
    pass: '',
  })
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Sign Up</h1>
        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          onChange={(e) =>
            SetValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <InputControl label="Email" placeholder="Enter email address" />
        <InputControl label="Password" placeholder="Enter Password" />

        <div className={styles.footer}>
          <button>Login</button>
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
