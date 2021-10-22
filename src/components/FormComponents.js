import React from "react"

function FormComponents(props) {
    return(
    <div className="container">
    <form className="form-box">
      
      <div>     
        <div>
          <label>First Name:</label>
          </div>
           <input type="text" name="firstName" placeholder="First Name" onChange={props.handleChange}/>
        </div>

        <div>
        <div className="input-area">
          <label>Last Name:</label>
          </div>
           <input type="text" name="lastName" placeholder="Last Name" onChange={props.handleChange} />
        </div>

        <div>
        <div className="input-area">
          <label>Email Address:</label>
          </div>
           <input type="text" name="email" placeholder="Email Address" onChange={props.handleChange} />
        </div>

        <div>
          <div className="input-area">
          <label>I have coding experience:</label>
          </div>
           <input type="checkbox"  name="isCoder"
                    checked={props.data.isCoder}
                    onChange={props.handleChange}/>
        </div>

        <div>
          <div className="input-area">
          <label>If you checked the above, how many weeks of coding experience do you have?:</label>
          </div>
           <input type="text" name="codeExperience"  onChange={props.handleChange}/>
        </div>

        <div className="input-area">
          <label>Choose your start date:</label>
          <div id="dates"> 
          <label id="dates">
          <input id="dates" type="radio" name="startDate" value="january 2022"
          checked={props.data.startDate === "january 2022"}
          onChange={props.handleChange}/>
                 January 2022 
            </label>
            <label id="dates">
                <input id="dates"
                    type="radio" name="startDate" value="april 2022" 
                    checked={props.data.startDate === "april 2022"}
                    onChange={props.handleChange}/> April 2022 
            </label>
            <label id="dates">
                <input id="dates"
                    type="radio" name="startDate" value="august 2022"
                    checked={props.data.startDate === "august 2022"}
                    onChange={props.handleChange}/> August 2022 
            </label>
            <label id="dates">
                <input id="dates"
                    type="radio" name="startDate" value="october 2022" 
                    checked={props.data.startDate === "october 2022"}
                    onChange={props.handleChange}/> October 2022 
            </label>
            </div>
          
        </div>

        <div>
            <div className="input-area">
                <label id="select"> Choose your Course:</label>
            <select value={props.data.course} onChange={props.handleChange}
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
    )
}

export default FormComponents;