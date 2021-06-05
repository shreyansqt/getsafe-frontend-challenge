import React, { InputHTMLAttributes, useState } from 'react'
import { CollectedData } from './types'

interface NameStepProps {
  cb: (
    field: keyof Pick<CollectedData, 'firstName' | 'lastName'>,
    value: CollectedData[typeof field]
  ) => void
}

const requiredInputProps: InputHTMLAttributes<HTMLInputElement> = {
  required: true,
  pattern: '.*\\S+.*', // disallows empty spaces
  // most browsers use the title attribute in the error message
  title: 'This field is required, empty spaces are not allowed',
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        props.cb('firstName', firstName)
        props.cb('lastName', lastName)
      }}
    >
      <div>
        First Name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstName(value)
          }}
          value={firstName}
          {...requiredInputProps}
        />
      </div>
      <div>
        Last Name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastName(value)
          }}
          value={lastName}
          {...requiredInputProps}
        />
      </div>
      <button type="submit">Next</button>
    </form>
  )
}

export default NameStep
