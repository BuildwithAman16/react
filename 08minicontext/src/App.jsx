import './App.css'
import Profile from './component/Profile'
import Login from './component/Login'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Profile />

      <Login />
    </UserContextProvider>
  )
}

export default App
