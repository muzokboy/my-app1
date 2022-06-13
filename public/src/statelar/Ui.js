import React, { Component } from 'react'

export default class Ui extends Component {
    constructor(props){
        super(props);
        this.state={
            null:0,
            bir:1,
            ikki:2,
            uch:3,
            turt:4,
            besh:5,
            olti:6,
            yitti:7,
            sakkiz:8,
            tuqqiz:9,
        }
    }
    null(){
        this.setState({
            null:0
        })
    }
    bir(){
        this.setState({
            bir:1
        })
    }
    ikki(){
        this.setState({
            ikki:2
        })
    }
    uch(){
        this.setState({
            uch:3
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.state}</h1>
                <button onClick={(e)=> this.null(e)}>0</button>
                <button onClick={(e)=> this.bir(e)}>1</button>
                <button onClick={(e)=> this.ikki(e)}>2</button>
                <button onClick={(e)=> this.uch(e)}>3</button>
                
            </div>
        )
    }
}
