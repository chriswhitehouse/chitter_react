import React, {Component} from 'react'

class App extends Component {
  state ={
    data: [],
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
          data: result,
        })

      })
  }

  render() {
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry.body}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App
