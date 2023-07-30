// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ** Components Imports
import LoginPage from './pages/login'
import LoadingPage from './pages/loading'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
