// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ** Components Imports
import LoginPage from './pages/login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
