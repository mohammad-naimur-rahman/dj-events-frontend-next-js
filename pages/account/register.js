import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '@/styles/AuthForm.module.css'
import Layout from '@/components/Layout'
import { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import AuthContext from '@/context/authContext'

export default function RegisterPage() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const { register, error } = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('Password does not match')
      return
    }
    console.log({ email, password, username, passwordConfirm });
  }

  return (
    <Layout title="User Registration">
      <div className={styles.auth}>
        <h1>
          <FaUser /> Register
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={e => setPasswordConfirm(e.target.value)}
            />
          </div>
          <input type="submit" value="Login" className="btn" />
        </form>
        <p>
          Already have an account? <Link href='/account/login'>Register</Link>
        </p>
      </div>
    </Layout>
  )
}
