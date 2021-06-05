import React, { useState } from 'react'

interface NameStepProps {
  cb: (field: string, value: string) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <>
      <div>
        First Name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstName(value)
          }}
          value={firstName}
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
        />
      </div>
      <button
        onClick={() => {
          props.cb('firstName', firstName)
          props.cb('lastName', lastName)
        }}
      >
        Next
      </button>
    </>
  )
}

export default NameStep
