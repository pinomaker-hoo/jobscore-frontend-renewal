// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ** Components Imports
import LoginPage from './pages/login'
import LoadingPage from './pages/loading'
import CompanyPage from './pages/company'
import CompanySearch from './pages/company/search'
import CategoryPage from './pages/category'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/search" element={<CompanySearch />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
