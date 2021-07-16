import { API_URL } from "@/config/index"
import { createContext, useState } from "react"


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [error, setRrror] = useState(null)

  //Register user
  const register = async (user) => {
    console.log(user)
  }
  //Login user
  const login = async ({ email: identifier, password }) => {
    console.log(identifier, password);
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