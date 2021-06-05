import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState('name')
  const [collectedData, updateData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
  })

  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData((collectedData) => ({ ...collectedData, [field]: value }))
    setStep(nextStep)
  }

  const getStepComponent = (step: string) => {
    switch (step) {
      case 'name':
        return <NameStep cb={getStepCallback('email')} />
      case 'email':
        return <EmailStep cb={getStepCallback('age')} />
      case 'age':
        return <AgeStep cb={getStepCallback('summary')} />
      case 'summary':
        return <SummaryStep collectedData={collectedData} />
      default:
        console.error(`Step "${step}" doesn't exist`)
        return null
    }
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {getStepComponent(currentStep)}
    </>
  )
}

export default Buyflow
