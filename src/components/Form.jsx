import React from 'react'
import useForm from './useForm';


const Form = ({submitForm}) => {
    const {values, errors, handleSubmit, handleFirstName, handleLastName, handleEmail} = useForm(submitForm);

    return (
        <div className="container">
    <form className="form-box" onSubmit={handleSubmit}>
      
      <div>     
        <div>
          <label>First Name:</label>
          </div>
           <input value={values.firstName} type="text" name="firstName" placeholder="First Name" onChange={handleFirstName}/>
           {errors.firstName && <p className='error'>{errors.firstName}</p>}
        </div>

        <div>
        <div className="input-area">
          <label>Last Name:</label>
          </div>
           <input value={values.lastName} type="text" name="lastName" placeholder="Last Name" onChange={handleLastName}/>
           {errors.lastName && <p className='error'>{errors.lastName}</p>}
        </div>

        <div>
        <div className="input-area">
          <label>Email Address:</label>
          </div>
           <input value={values.email} type="text" name="email" placeholder="Email Address" onChange={handleEmail}/>
           {errors.email && <p className='error'>{errors.email}</p>}
        </div>

        
        <div id="submit">
         <button id="subbutton"> Click to Register </button>
        </div>

    </form>
    </div>
    
  )
    
}

export default Form;










        
         
    


    
        

