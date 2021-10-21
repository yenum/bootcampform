import React from "react"


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
        <div className="container">
        <form className="form-box">
          
          <div>     
            <div>
              <label>First Name:</label>
              </div>
               <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
            </div>

            <div>
            <div className="input-area">
              <label>Last Name:</label>
              </div>
               <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
            </div>

            <div>
            <div className="input-area">
              <label>Email Address:</label>
              </div>
               <input type="text" name="email" placeholder="Email Address" onChange={this.handleChange} />
            </div>

            <div>
              <div className="input-area">
              <label>I have coding experience:</label>
              </div>
               <input type="checkbox"  name="isCoder"
                        checked={this.state.isCoder}
                        onChange={this.handleChange}/>
            </div>

            <div>
              <div className="input-area">
              <label>If you checked the above, how many weeks of coding experience do you have?:</label>
              </div>
               <input type="text" name="codeExperience"  onChange={this.handleChange}/>
            </div>

            <div className="input-area">
              <label>Choose your start date:</label>
              <div id="dates"> 
              <label id="dates">
              <input id="dates" type="radio" name="startDate" value="january 2022"
              checked={this.state.startDate === "january 2022"}
              onChange={this.handleChange}/>
                     January 2022 
                </label>
                <label id="dates">
                    <input id="dates"
                        type="radio" name="startDate" value="april 2022" 
                        checked={this.state.startDate === "april 2022"}
                        onChange={this.handleChange}/> April 2022 
                </label>
                <label id="dates">
                    <input id="dates"
                        type="radio" name="startDate" value="august 2022"
                        checked={this.state.startDate === "august 2022"}
                        onChange={this.handleChange}/> August 2022 
                </label>
                <label id="dates">
                    <input id="dates"
                        type="radio" name="startDate" value="october 2022" 
                        checked={this.state.startDate === "october 2022"}
                        onChange={this.handleChange}/> October 2022 
                </label>
                </div>
              
            </div>

            <div>
                <div className="input-area">
                    <label id="select"> Choose your Course:</label>
                <select value={this.state.course} onChange={this.handleChange}
                name="course">
                    <option value="Front End Developer Course">Front End Developer Course</option>
                    <option value="Back End Developer Course">Back End Developer Course</option>
                    <option value="Full Stack Developer Course">Full Stack Developer Course</option>
                    <option value="UI/UX Designer Course">UI/UX Designer Course</option>
                    <option value="Data Scientist Course">Data Scientist Course</option>
                </select>
                </div>
            
            </div>
            <div id="submit">
             <button id="subbutton"> Submit</button>
            </div>

        </form>
        </div>
          );

    }
  
}

export default Form;