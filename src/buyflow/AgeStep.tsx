import React, { useState } from 'react'
import { CollectedData } from './types'

interface AgeStepProps {
  cb: (
    field: keyof Pick<CollectedData, 'age'>,
    value: CollectedData[typeof field]
  ) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        props.cb('age', age)
      }}
    >
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        />
      </div>
      <button type="submit">Next</button>
    </form>
  )
}

export default AgeStep
