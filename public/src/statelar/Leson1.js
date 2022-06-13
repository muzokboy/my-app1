import React, { Component } from 'react'

export default class Leson1 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Uzokboy',
            age:25,
            job:'Frontend Developer',
            date: new Date()
        }
    }
    render() {
        // console.log(this.state);
        return (
            <div>
                 <h1>My name is {this.state.name}</h1>
                 <h2>I'm {this.state.age} years old</h2>
                 <p>I'm {this.state.job }</p>
                 <h1>Now {this.state.date.toLocaleDateString()}</h1>
            </div>
        )
    }
}
