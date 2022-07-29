import axios from "axios";
import React from "react";
import './ListUsers.scss'

class ListUsers extends React.Component {

    state = {
        ListUsers: []
    }
    componentDidMount() {

        // cái này trả về Object
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                this.setState({
                    ListUsers: res && res.data && res.data.data ? res.data.data : []
                })
            })


        // cái này trả về Response nên ko có data để dùng 
        // fetch('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('>> res form fetch: ', res)
        //     })
    }

    render() {
        let { ListUsers } = this.state

        return (
            <div className="list-users-container">
                <div className="title">
                    <h4>Fetch all list users form: (
                        <a
                            href="https://reqres.in/api/users?page=2"
                            target="_blank"
                            style={{ color: "green" }}
                        >
                            https://reqres.in/api/users?page=2
                        </a>
                        )
                    </h4>
                </div>

                <div className="list-users-content">
                    {ListUsers && ListUsers.length > 0 &&

                        ListUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        )
    }
}

export default ListUsers