import React, { useState } from 'react'
import { CollectedData } from './types'

interface EmailStepProps {
  cb: (
    field: keyof Pick<CollectedData, 'email'>,
    value: CollectedData[typeof field]
  ) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        props.cb('email', email)
      }}
    >
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
          required
        />
      </div>
      <button type="submit">Next</button>
    </form>
  )
}

export default EmailStep
