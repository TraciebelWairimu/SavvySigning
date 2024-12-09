// eslint-disable-next-line no-unused-vars
import react from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login.jsx"
import Register from "../pages/Register.jsx"
import Home from "../pages/Home.jsx"
import NotFound from "../pages/NotFound.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"
import Landing from "../pages/Landing.jsx";

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
      <div className="App">
         <Routes>
           <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
  )
}

export default App
