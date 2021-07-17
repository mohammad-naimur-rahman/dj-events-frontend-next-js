import { NEXT_URL } from "@/config/index"
import { createContext, useState } from "react"


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [error, setError] = useState(null)

  //Register user
  const register = async (user) => {
    console.log(user)
  }
  //Login user
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier,
        password
      })
    })

    const data = await res.json()

    console.log(data)

    if (res.ok) {
      setUser(data)
    } else {
      setError(data.message)
      setError(null)
    }
  }

  //Logout user
  const logout = async () => {
    console.log('logout')
  }

  //Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    console.log('check')
  }

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout, checkUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext