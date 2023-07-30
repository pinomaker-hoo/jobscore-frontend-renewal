// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ** Components Imports
import LoginPage from './pages/login'
import LoadingPage from './pages/loading'
import CompanyPage from './pages/company'
import CompanySearch from './pages/company/search'
import CategoryPage from './pages/category'
import SelectIntroPage from './pages/select/intro'
import SelectPage from './pages/select'
import SelectWantIntroPage from './pages/selectWant/intro'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/search" element={<CompanySearch />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/select/intro" element={<SelectIntroPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/selectWant/intro" element={<SelectWantIntroPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
