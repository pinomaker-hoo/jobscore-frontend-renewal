// ** React Imports
import { useState } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Other Page View
import SelectPageView from '@/views/select'

// ** Type Imports
import { SelectPoint } from '@/types'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { updateMyCompanyScore } from '@/store/app/user'

const SelectPage = () => {
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
      dispatch(updateMyCompanyScore(point))
      navigate('/selectWant/intro')

      return
    }
    setPoint((cur: SelectPoint) => ({ ...cur, [type]: cur[type] + number }))
    setCount((cur) => cur + 1)
  }

  return <SelectPageView count={count} handleChange={handleChange} />
}

export default SelectPage
