import React from 'react';

class Backend extends React.Component {
    state = {
        user: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState({ user: data })
            })
    }
    render() {
        return (
            <>
                <table border='1px'>
                    {this.state.user.map((users) => (
                    <tr key={users.id}>
                        <th>
                            <h3>{users.name}</h3>
                        </th>
                        <tr></tr>
                    </tr>




                    ))}
                </table>
            </>);
    }
}

export default Backend;