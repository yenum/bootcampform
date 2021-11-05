const validation = (values) => {
    
    let errors ={};

    if(!values.firstName) {
        errors.firstName = 'First Name is Required'
    }

    if(!values.lastName) {
        errors.lastName = 'Last Name is Required'
    }

    if(!values.email) {
        errors.email = 'Email is Required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid'
    }




    return errors
}

export default validation
