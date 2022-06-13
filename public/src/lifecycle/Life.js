
import React, { Component } from 'react'

export default class Life extends Component {
    constructor(){
        super();
        console.log('construcor ishlayapti');
    }
    componentDidMount(){
        console.log('component did mounrt');
    }
    componentWillMount(){
        console.log('bu will m');
    }
    render() {
        console.log('Render bu');
        return (
            <div>
                
            </div>
        )
    }
}
