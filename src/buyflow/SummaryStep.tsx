import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    firstName: string
    lastName: string
    email: string
    age: number
  }
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>First Name: {props.collectedData.firstName}</div>
      <div>Last Name: {props.collectedData.lastName}</div>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
