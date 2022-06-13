import React, { Component } from 'react'

export default class Comp2 extends Component {
    render() {
        return (
            <div>
                <h1>This is  {this.props.text}</h1>
                <h2>The first class is {this.props.jadval}</h2>
            </div>
        )
    }
}
