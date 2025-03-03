import React from 'react'
import PropTypes from 'prop-types'

// this is the child here  and app1 is the parent of this 
const Student = (props) => {     
  return (
    <div>
      
      <p> Name : {props.name } </p>
      <p> Age : {props.age}</p>
      <p>Student  : {props.isStudent ? "Yes " :"No"}</p>
    </div>
  )
}

// Student.PropTypes = {

//     name : PropTypes.string,
//     age : PropTypes.number,
//     isStudent : PropTypes.bool,
// }

export default Student
