import React from "react";

import "../App.css";


export class DeleteAll extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  render () {
    const { onDeleteAll } = this.props;

    return (
        <input
          className   = "delete-all"
          type        = "button"
          placeholder = "Add Note"
          value       = "Delete all tasks"
          onClick     = { (event) => {onDeleteAll()} }
        />
    )
  }

}

