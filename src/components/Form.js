import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    body: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { body } = this.state;

    return (
      <form>
        <label htmlFor="peep">Peep</label>
        <input
          type="text"
          name="body"
          id="body"
          placeholder="Peep..."
          value={body}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}


export default Form;
