import React from "react"


class Form extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className= "form">
              <form>
                  <label>First Name:</label>
                  <input type="text" placeholder="Your first name"/> <br></br>

                  <label>Last Name:</label>
                  <input type="text" placeholder="Your last name"/>  <br></br>
              </form>
            </div>
          );

    }
  
}

export default Form;