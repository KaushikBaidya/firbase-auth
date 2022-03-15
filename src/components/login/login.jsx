import React from 'react'
import styles from './login.module.css'
import InputControl from '../InputControl/InputControl'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl label="Email" placeholder="Enter email address" />
        <InputControl label="Password" placeholder="Enter email address" />

        <div className={styles.footer}>
          <button>Login</button>
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
