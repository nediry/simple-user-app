import React, { Component } from "react";

const UserContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "delete_user":
            return {
                ...state, users: state.users.filter(user => user.id !== action.payload)
            }
        case "add_user":
            return {
                ...state, users: [...state.users, action.payload]
            }
        default:
            return state
    }
}

export class UserProvider extends Component {
    state = {
        users: [],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state, users : JSON.parse(localStorage.getItem("users"))
        });
    }
    
    componentDidUpdate() {
        localStorage.setItem("users", JSON.stringify(this.state.users));
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;