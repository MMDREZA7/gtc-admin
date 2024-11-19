import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider, AuthGuard } from './context/AuthContext'
import { AlertProvider } from './context/alert/AlertContext'
import { WebSocketProvider } from './context/ws.context'

const Login = React.lazy(() => import('./components/authenticate/login'))
const PanelAdmin = React.lazy(() => import('./components/panelAdmin/panelAdmin'))

function App () {
  return (
    <AuthProvider>
      <AlertProvider>
        <Router>
          <WebSocketProvider>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/panel-admin' element={<PanelAdmin />} />
              </Routes>
            </React.Suspense>
          </WebSocketProvider>
        </Router>
      </AlertProvider>
    </AuthProvider>
  )
}

export default App
