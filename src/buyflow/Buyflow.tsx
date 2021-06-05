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
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === 'name' && <NameStep cb={getStepCallback('email')} />) ||
        (currentStep === 'email' && (
          <EmailStep cb={getStepCallback('age')} />
        )) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Buyflow
