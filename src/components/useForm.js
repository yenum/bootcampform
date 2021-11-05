import {useState, useEffect} from 'react'
import validation from './validation'

const useForm = (submitForm ) => {
    const [values,setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',

    })

    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    

    const handleFirstName = (event) =>{
        setValues({...values, firstName: event.target.value})
        
    }

    const handleLastName = (event) =>{
      setValues({...values, lastName: event.target.value})
      
  }

  const handleEmail = (event) =>{
    setValues({...values, email: event.target.value})
    
}

const handleSubmit = (event) => {
  event.preventDefault();
  setErrors(validation(values))
  setDataIsCorrect(true);
}

useEffect(() => {
      if (Object.keys(errors).length === 0 && dataIsCorrect) {
       submitForm(true);
      }
    },
 );

return {handleEmail, handleFirstName, handleLastName, values, errors, handleSubmit}
}

export default useForm;
