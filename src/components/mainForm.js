import React, { useState } from 'react'
import Form from './components/Form'
import SignFormSucess from './components/SignFormSucess'


export const mainForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm =() => {
    setIsSubmitted(true);
  }
    return (
        <div>
            {!isSubmitted ? (
          <Form submitForm={submitForm} />
        ) : (
          <SignFormSucess />
        )} 
        </div>
    )
}
