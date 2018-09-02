import React, {Component} from "react";


class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })
  }
  render() {
  return (
    <div className="addTodo">
      <form onSubmit={this.handleSubmit}>
      <input className="form-text" type="text" onChange={this.handleChange} 
        value={this.state.content}
        placeholder="add Todo" 
        />
      <button addTodo={this.addTodo}> + </button>
      </form>
    </div>
  )
}
}

export default AddTodo;