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
        console.log(result)
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
    this.setState({peeps: [...this.state.peeps, peep]})
  }

  render() {
    return (
      <div className="container">
        <Title />
        <Table peepData={this.state.peeps} removePeep={this.removePeep} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
