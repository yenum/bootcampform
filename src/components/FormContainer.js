import React from "react"
import FormComponents from "./FormComponents"


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            isCoder: "",
            codeExperience: "",
            startDate: "",
            course: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
         
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }


    render() {
        return (
         <FormComponents 
         handleChange={this.handleChange}
                data={this.state}/>
          );

    }
  
}

export default Form;