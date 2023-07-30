// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** React Imports
import { useState } from 'react'

// ** Other Page View
import SelectWantPageView from '@/views/selectWant'

// ** Type Imports
import { SelectPoint } from '@/types'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { updateWantCompanyScore } from '@/store/app/user'

const SelectWantPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [point, setPoint] = useState<SelectPoint>({
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0,
  })
  const [count, setCount] = useState<number>(0)

  const handleChange = (type: string, number: number) => {
    if (count === 19) {
      dispatch(updateWantCompanyScore(point))
      navigate('/endLoading')

      return
    }
    setPoint((cur: SelectPoint) => ({ ...cur, [type]: cur[type] + number }))
    setCount((cur) => cur + 1)
  }

  return <SelectWantPageView count={count} handleChange={handleChange} />
}

export default SelectWantPage
