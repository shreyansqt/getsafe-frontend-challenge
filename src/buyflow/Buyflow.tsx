import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
import SummaryStep from './SummaryStep'
import { CollectedData } from './types'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

enum Step {
  Name,
  Email,
  Age,
  Summary,
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState<Step>(Step.Name)
  const [collectedData, updateData] = useState<CollectedData>({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
  })

  const getStepCallback = (nextStep: Step) => (
    field: keyof CollectedData,
    value: CollectedData[typeof field]
  ) => {
    updateData((collectedData) => ({ ...collectedData, [field]: value }))
    setStep(nextStep)
  }

  const getStepComponent = (step: Step) => {
    switch (step) {
      case Step.Name:
        return <NameStep cb={getStepCallback(Step.Email)} />
      case Step.Email:
        return <EmailStep cb={getStepCallback(Step.Age)} />
      case Step.Age:
        return <AgeStep cb={getStepCallback(Step.Summary)} />
      case Step.Summary:
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
