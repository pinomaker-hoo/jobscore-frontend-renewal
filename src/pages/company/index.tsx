// ** React Imports
import { useEffect, useState } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Other View Imports
import CompanyPageView from '@/views/company'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { updateCompany } from '@/store/app/user'

const CompanyPage = () => {
  const queryParams = new URLSearchParams(window.location.search)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [company, setCompany] = useState<{ name: string; id: string }>({
    name: '',
    id: '',
  })
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if (e.target.checked) {
      setCompany({ id: '', name: '비공개' })

      return
    }

    setCompany({ id: '', name: '' })
  }

  const handleNext = () => {
    dispatch(updateCompany({ ...company, department: '' }))

    navigate('/category')
  }

  useEffect(() => {
    if (queryParams.get('id')) {
      setCompany({
        id: String(queryParams.get('id')),
        name: String(queryParams.get('name')),
      })
    }
  }, [queryParams.get('id')])

  return (
    <CompanyPageView
      name={company.name}
      handleChange={handleChange}
      checked={checked}
      handleNext={handleNext}
    />
  )
}

export default CompanyPage
