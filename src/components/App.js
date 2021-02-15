import React, {Component} from 'react'

import Table from './Table'
import Form from './Form'
import Title from './Title'

class App extends Component {
  state = {
    peeps: [],
  }

  // Code is inovked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
        'https://chitter-backend-api-v2.herokuapp.com/peeps'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          peeps: result,
        })

      })
  }

  removePeep = (index) => {
    const {peeps} = this.state

    this.setState({
      peeps: peeps.filter((peep, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (peep) => {
    console.log(peep)
    console.log(this.state.peeps)
    this.setState({peeps: [...this.state.peeps, peep]})
    console.log(this.state.peeps)
  }

  render() {
    return (
      <div className="container">
        <Title />
        <Form handleSubmit={this.handleSubmit} />
        <Table peepData={this.state.peeps} removePeep={this.removePeep} />
      </div>
    )
  }
}

export default App
