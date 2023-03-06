import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Disease from './user/Disease'
import Homepage from './user/Homepage'
import Medicine from './user/Medicine'

export default class Container extends Component {
  render() {
    return (
      <div>
          <Medicine/>
      </div>
    )
  }
}
