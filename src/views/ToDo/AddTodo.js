import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        name: ''
    }

    handDataInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnClick = () => {

        if (!this.state.name) {
            toast.error(`Missing title's Todo!`)
        } else {
            let dataCurrent = {
                id: Math.floor(Math.random() * 10000),
                name: this.state.name
            }

            this.props.pushData(dataCurrent)

            this.setState({
                name: '',
            })

            toast.success(`Add Todo Success`)
        }
    }

    render() {
        return <>
            <div className="input-container">
                <input type="text" value={this.state.name}
                    onChange={(event) => this.handDataInput(event)}
                />
                <button className="add-btn" onClick={() => this.handleOnClick()}>
                    Add
                </button>
            </div>
        </>
    }
}

export default AddTodo