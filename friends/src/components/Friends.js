import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

class Friends extends React.Component{
    state = {
        friends: []
    };

    componeneDidMount() {
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
        .get('/Friends')
        .then(res => {
            this.setState({
                friends: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Bros</h1>
                {this.state.friends.map((friend) => {
                    return (
                        <div key={friend.id}>
                            <h2>{friend.name}</h2>
                            <p>age{friend.age}</p>
                            <p>email{friend.email}</p>
                        </div>

                    )
                })}
            </div>
        )
    }
}

export default Friends