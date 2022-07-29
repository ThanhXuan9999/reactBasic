import React from "react";
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class DetailUser extends React.Component {

    state = {
        user: {}
    }
    async componentDidMount() {

        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res.data && res.data.data ? res.data.data : {}
            })
        }

    }

    handleBackBtn = () => {
        this.props.history.push('/listUsers')
    }

    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0

        return (
            <>
                <div>
                    <h3>Hello Info Of User</h3>
                </div>
                {isEmptyObj === false &&
                    <>
                        <div>
                            Name: {user.first_name} {user.last_name}
                        </div>
                        <div>
                            Email: {user.email}
                        </div>
                        <div>
                            <img src={user.avatar} />
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={() => this.handleBackBtn()}
                            >
                                Back
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser)