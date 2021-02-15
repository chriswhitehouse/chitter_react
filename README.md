# Chitter React
An extension to the Chitter Challenge; a small twitter clone. This time building out a front end single page application connecting to a pre-existing backend with APIs.

## Motivation
To further develop my understanding of building for client side applications, and learn more about React.

## Build status
[![Build Status](https://travis-ci.com/chriswhitehouse/chitter_react.svg?branch=main)](https://travis-ci.com/chriswhitehouse/chitter_react)

## Screenshots
![Home Page](https://github.com/chriswhitehouse/chitter_react/blob/main/screenshots/Screenshot%202021-02-15%20at%2021.09.48.png)

## Tech/framework used
React with Jest testing framework.

## Features
Add and delete peeps. (Note Delete does not delete in backend yet)

## Code Example
App.js
```js
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
```

## Installation
* Fork and clone repo.
* Cd into project folder
* `$ npm install`

## API Reference

This app is using the the following [backend API](https://github.com/makersacademy/chitter_api_backend)

## Tests
`$ npm test` to run tests
8 passing tests.

## How to use?
To run locally: `$ npm start`

To run from deployment: https://chriswhitehouse.github.io/chitter_react/
