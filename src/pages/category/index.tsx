// ** React Imports
import { useState } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Other View Imports
import CategoryPageView from '@/views/category'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { updateDepartment } from '@/store/app/user'

const CategoryPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [department, setDepartment] = useState<string>('')

  const handleBtnClick = (department: string) => {
    setDepartment(department)
  }

  const handleNext = () => {
    dispatch(updateDepartment({ department }))
    navigate('/select/intro')
  }

  return (
    <CategoryPageView
      handleBtnClick={handleBtnClick}
      department={department}
      handleNext={handleNext}
    />
  )
}

export default CategoryPage
